import React from 'react'
import './popular-card.css'

import moment from 'moment'

const PopularCard = ({article}) => {
    return (
        <div className='card-popular-wrapper'>
            <p className='popular-headline'>{article?.title}</p>
            <p className='popular-description'>{article?.description?.substring(0, 40)}</p>
            <p className='popular-time'>{moment(article?.date).fromNow()}</p>
        </div>
    )
}

export default PopularCard
