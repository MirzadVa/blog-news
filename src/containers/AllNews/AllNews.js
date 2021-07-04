import React from 'react'
import './all-news.css'

import StandardNewsCard from '../../components/StandardNewsCard/StandardNewsCard'
import LeftImageCard from '../../components/LeftImageCard/LeftImageCard'

const AllNews = ({restOfHeadlines, smallBoxes}) => {
    return (
        <div>
            <div className='all-news-wrapper'>
                {restOfHeadlines?.length > 0 && restOfHeadlines?.map((elem, index) => {
                    if(index < 4){
                        return (
                            <div class={`box${index + 1} box-holder`}>
                                <StandardNewsCard key={index} news={elem}/>
                            </div>
                        )
                    }else if(index >= 4 && index <= 5){
                        return(
                            <div class={`box${index + 1}`}>
                                <LeftImageCard key={index} news={elem}/>
                            </div>
                        )
                    }
                })}
            </div>
            <div className='all-other-news-wrapper'>
                {smallBoxes.length > 0 && smallBoxes.map((elem, index) => (
                        <StandardNewsCard key={index} news={elem}/>
                ))}
            </div>
            <div className='read-more-button-wrapper'>
                <div className='load-more-button'>LOAD MORE</div>
            </div>
        </div>
    )
}

export default AllNews
