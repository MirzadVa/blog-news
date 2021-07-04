import React, { useEffect, useState } from 'react'
import './search-page.css'

import loading from '../../../lottie/searchLoading.json'

import useDebounce from '../../../helper/useDebounce'
import apiRequest from '../../../helper/apiRequest'

import SearhcLoading from '../../../lottie/SeachLoading'
import StandardNewsCard from '../../../components/StandardNewsCard/StandardNewsCard'

const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [isSearcing, setIsSearching] = useState(false)
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
                setSearchResults(response.data.articles)
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
      }, [debouncedSearchTerm])
    return (
        <div className='main-content'>
            <div className='search-page-wrapper'>
                <div className='search-container'>
                    <input type="search" placeholder="Search" className='search-input' onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className='results-container'>
                    {isSearcing ? (
                        <SearhcLoading lotti={loading} height={150} width={150} />
                    ) : (
                        <div className='results'>
                                {searchResults.length > 0 && searchResults.map((elem, index) => (
                                     <div className='result-box' key={index}>
                                        <StandardNewsCard news={elem} />
                                    </div>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SearchPage
