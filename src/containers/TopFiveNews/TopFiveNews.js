import React from 'react'
import './top-five-news.css'

import MainNewsCard from '../../components/MainNewsCard/MainNewsCard'

const TopSevenNews = ({topFiveNews}) => {
    return (
        <div className='top-five-container'>
            <div className='first-row'>
                <div className='left-column'>
                    <div className='news-box left-column-box'>
                        <MainNewsCard
                            imageUrl={topFiveNews[0]?.urlToImage}
                            title={topFiveNews[0]?.title}
                            date={topFiveNews[0]?.publishedAt}
                            author={topFiveNews[0]?.author}
                            content={topFiveNews[0]?.content}
                            bigCard={true}
                        />
                    </div>
                </div>
                <div className='right-column'>
                    <div className='right-first-row'>
                        <div className='news-box right-second-box'>
                            <MainNewsCard
                                imageUrl={topFiveNews[1]?.urlToImage}
                                title={topFiveNews[1]?.title}
                                date={topFiveNews[1]?.publishedAt}
                                author={topFiveNews[1]?.author}
                                content={topFiveNews[1]?.content}
                            />
                        </div> 
                        <div className='news-box right-second-box'>
                            <MainNewsCard
                                imageUrl={topFiveNews[2]?.urlToImage}
                                title={topFiveNews[2]?.title}
                                date={topFiveNews[2]?.publishedAt}
                                author={topFiveNews[2]?.author}
                                content={topFiveNews[2]?.content}
                            />
                        </div> 
                    </div>
                    <div className='right-second-row'>                      
                        <div className='news-box right-second-box'>
                            <MainNewsCard
                                imageUrl={topFiveNews[3]?.urlToImage}
                                title={topFiveNews[3]?.title}
                                date={topFiveNews[3]?.publishedAt}
                                author={topFiveNews[3]?.author}
                                content={topFiveNews[3]?.content}
                            />
                        </div>  
                        <div className='news-box right-second-box'>
                            <MainNewsCard
                                imageUrl={topFiveNews[4]?.urlToImage}
                                title={topFiveNews[4]?.title}
                                date={topFiveNews[4]?.publishedAt}
                                author={topFiveNews[4]?.author}
                                content={topFiveNews[4]?.content}
                            />
                        </div>  
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default TopSevenNews
