import React from 'react'
import './popular-card.css'

import moment from 'moment'
import { useHistory } from 'react-router-dom'

const PopularCard = ({article}) => {
    const history = useHistory()

    const goToArticle = () => {
        history.push('/article', {
            imageUrl : article?.urlToImage, 
            title : article?.title, 
            date : article?.date,
            author : article?.author, 
            content : article?.content
        })
    }
    return (
        <div className='card-popular-wrapper'>
            <p className='popular-headline' onClick={() => goToArticle()}>{article?.title}</p>
            <p className='popular-description'>{article?.description?.substring(0, 40)}</p>
            <p className='popular-time'>{moment(article?.date).fromNow()}</p>
        </div>
    )
}

export default PopularCard
