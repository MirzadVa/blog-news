import React, { useEffect, useState } from 'react'
import './search-page.css'

import loading from '../../../lottie/searchLoading.json'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import useDebounce from '../../../helper/useDebounce'
import apiRequest from '../../../helper/apiRequest'

import SearhcLoading from '../../../lottie/SeachLoading'
import StandardNewsCard from '../../../components/StandardNewsCard/StandardNewsCard'
import NotFound from '../../../assets/not-found.jpg'
import SelectComponent from '../../../components/SelectComponent/SelectComponent'

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [sortBy, setSortBy] = useState('popularity')

    const [searchResults, setSearchResults] = useState([])
    const [isSearcing, setIsSearching] = useState(false)
    const [isFirstVisit, setIsFirstVisit] = useState(true)
    const [searchFailed, setIsSearchFailed] = useState(false)
    const [showFilter, setShowFilter] = useState(false)
    const debouncedSearchTerm = useDebounce(search, 500)

    const searchArticle = async (searchItem) => {
        let searchSend = ''
        if (searchItem !== undefined) {
        searchSend = searchItem
        }
        try{
            const response = await apiRequest({
                method: 'get',
                url: `everything?q=${searchSend}&pageSize=100&sortBy=${sortBy}`
            })
            if(response.data.status === 'ok'){
                if(response.data.articles.length > 0){
                    setSearchResults(response.data.articles)
                    setIsSearchFailed(false)
                    setShowFilter(true)
                }else{
                    setSearchResults(response.data.articles)
                    setIsSearchFailed(true)
                    setShowFilter(false)
                }
                
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        setIsSearching(true)
        searchArticle(debouncedSearchTerm)
        .then(() => {
            setIsSearching(false)
          })
          .catch((err) => {
            console.log(err)
          })
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [sortBy])

    useEffect(() => {
        if(search !== ''){
            setIsSearching(true)
            searchArticle(debouncedSearchTerm)
            .then(() => {
              setIsSearching(false)
            })
            .catch((err) => {
              console.log(err)
            })
        }else{
            setSearchResults([])
            setIsFirstVisit(true)
            setShowFilter(false)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [debouncedSearchTerm])

    return (
        <div className='main-content'>
            <div className='search-page-wrapper'>
                <div className='search-container'>
                    <input type="search" placeholder="Search" className='search-input' onChange={(e) => {
                        setSearch(e.target.value)
                        setIsFirstVisit(false)}
                    }/><br />
                    <div className='filters-container'>
                        {showFilter ? (
                        <SelectComponent 
                        options={[
                            {value: 'relevancy', label: 'Relevancy'},
                            {value: 'popularity', label: 'Popularity'},
                            {value: 'publishedAt', label: 'PublishedAt'},
                        ]}
                        sortBy={sortBy}
                        handleChange={(e) => setSortBy(e)}/> ) : null }
                    </div> 
                </div>
                <Row className='results-container'>
                {isSearcing ? (
                    <div className='search-loading'>
                        <SearhcLoading lotti={loading} height={150} width={150} />
                    </div>
                ) : (
                    !isFirstVisit ? (
                        searchFailed && !isFirstVisit ? (
                            <div className='no-results-found'>
                                <img src={NotFound} alt='Not found' />
                                <h1>Sorry! No results found :(</h1>
                                <h4>We couldn't find what you are looking for. <br /> Please try another way</h4>
                            </div>
                        ) : (
                            searchResults.map((elem, index) => (
                                <Col xs={12} sm={12} md={6} lg={4} className='result-box' key={index}>
                                    <StandardNewsCard news={elem} />
                                </Col>
                            ))
                        )
                    ) : (
                        <div className='first-visit-div'>
                            <h1>Start typing to search for articles!</h1>
                        </div>
                    )
                )}
                </Row>
            </div>
        </div>
    )
}

export default SearchPage
