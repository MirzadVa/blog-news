import React, { useState, useEffect } from 'react'

import './main-page.css'
import apiRequest from '../../../helper/apiRequest'
import { AiOutlineArrowDown } from 'react-icons/ai'

import TopFiveNews from '../../TopFiveNews/TopFiveNews'
import AllNews from '../../AllNews/AllNews'
import LoadingAnimation from '../../../components/Loading/Loading'

const MainPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [topFiveNews, setTopFiveNews] = useState([])
    const [restOfHeadlines, setRestOfHeadlines] = useState([])
    const [smallBoxes, setSmallBoxes] = useState([])

    const fetchTopFiveHeadlines = async() => {
        try{
            const response = await apiRequest({
                method: 'get',
                url: 'top-headlines?country=us&pageSize=20'
            })
            if(response.data.status === 'ok'){
                let topFive = [...topFiveNews]
                let restOf = [...restOfHeadlines]
                let smallBox = [...smallBoxes]
                //This is to simulate like TOP 5 NEWS since we don't have API for this
                for(var i = 0; i < 5; i++){
                    topFive.push(response.data.articles[i])
                }
                for(var i = 5; i < 11; i++){
                    restOf.push(response.data.articles[i])
                }
                for(var i = 11; i < response.data.articles.length; i++){
                    smallBox.push(response.data.articles[i])
                }
                setTopFiveNews([...topFive])
                setRestOfHeadlines([...restOf])
                setSmallBoxes([...smallBox])
                setIsLoading(false)
            }
        }catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        fetchTopFiveHeadlines()
    }, [])
    return (
            isLoading ? (
                <LoadingAnimation />
            ) : (
                <div className='main-page-wrapper'>
                    <TopFiveNews topFiveNews={topFiveNews}/>
                    <h2 className='read-more-headline'>
                        <AiOutlineArrowDown />
                        Read more interesting stuff
                    </h2>
                    <AllNews restOfHeadlines={restOfHeadlines} smallBoxes={smallBoxes}/>
                </div>
            )
    )
}

export default MainPage