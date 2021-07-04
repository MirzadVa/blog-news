import React from 'react'
import './standard-news-card.css'

import resrveImage from '../../assets/reserve-image.jpg'

import moment from 'moment'

import { BsPersonFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'

const BigNewsCard = ({news}) => {
    return (
        <div className='big-news-card-wrapper'>
            <img src={news?.urlToImage !== null ? news?.urlToImage : resrveImage} className='big-news-image' alt='news'/>
            <h4 className='news-headline'>{news?.title}</h4>
            <p className='news-description'>{news?.description?.substring(0,100)}... <span className='read-more-button'>READ MORE</span></p>
            <div className='date-author-wrappers'>
                <p className='author-paragraphs'>
                    <FaRegCalendarAlt style={{color: '#C4C4C4'}} />
                    <span>{moment(news?.date).format('DD/MM/YYYY')}</span>
                </p>
                <p className='author-paragraphs'>
                    <BsPersonFill style={{color: '#C4C4C4'}}/>
                    <span>{news?.author}</span> 
                </p>
                </div>
        </div>
    )
}

export default BigNewsCard
