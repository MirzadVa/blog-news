import React, { useEffect, useState } from 'react'
import './search-page.css'

import loading from '../../../lottie/searchLoading.json'

import useDebounce from '../../../helper/useDebounce'
import apiRequest from '../../../helper/apiRequest'

import SearhcLoading from '../../../lottie/SeachLoading'
import StandardNewsCard from '../../../components/StandardNewsCard/StandardNewsCard'
import NotFound from '../../../assets/not-found.jpg'

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearcing, setIsSearching] = useState(false)
    const [isFirstVisit, setIsFirstVisit] = useState(true)
    const [searchFailed, setIsSearchFailed] = useState(false)
    const debouncedSearchTerm = useDebounce(search, 500)

    const searchArticle = async (searchItem) => {
        let searchSend = ''
        if (searchItem !== undefined) {
        searchSend = searchItem
        }
        try{
            const response = await apiRequest({
                method: 'get',
                url: `everything?q=${searchSend}`
            })
            if(response.data.status === 'ok'){
                if(response.data.articles.length > 0){
                    setSearchResults(response.data.articles)
                    setIsSearchFailed(false)
                }else{
                    setSearchResults(response.data.articles)
                    setIsSearchFailed(true)
                }
                
            }
        }catch(err){
            console.log(err)
        }
    }

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
        }
      }, [debouncedSearchTerm])
    return (
        <div className='main-content'>
            <div className='search-page-wrapper'>
                <div className='search-container'>
                    <input type="search" placeholder="Search" className='search-input' onChange={(e) => {
                        setSearch(e.target.value)
                        setIsFirstVisit(false)}
                    }/>
                </div>
                <div className='results-container'>
                    {isSearcing ? (
                        <SearhcLoading lotti={loading} height={150} width={150} />
                    ) : (
                    !isFirstVisit ? (
                        <div className='results'>
                                {searchFailed && !isFirstVisit ? (
                                    <div className='no-resutls-wrapper'>
                                        <img src={NotFound} alt='Not found' />
                                        <h1>Sorry! No results found :(</h1>
                                        <h4>We couldn't find what you are looking for. <br /> Please try another way</h4>
                                    </div>
                                ) : searchResults.map((elem, index) => (
                                     <div className='result-box' key={index}>
                                        <StandardNewsCard news={elem} />
                                    </div>
                                ))}
                        </div>
                    ) : (
                    <div className='first-visit-div'>
                        <h1>Start typing to search for articles!</h1>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
