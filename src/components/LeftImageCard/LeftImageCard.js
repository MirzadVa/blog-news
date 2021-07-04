import React from 'react'
import './left-image-card.css'

import moment from 'moment'

import ReserveImage from '../../assets/reserve-image.jpg'

import { BsPersonFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'

const LeftImageCard = ({news}) => {
    return (
        <div className='left-image-card-wrapper'>
            <img src={news?.urlToImage !== null ? news?.urlToImage : ReserveImage} className='image-news' alt='news'/>
            <div className='card-content'>
                <h4 className='news-headline'>{news?.title}</h4>
                <p className='news-description'>{news?.description.substring(0,100)}... <span className='read-more-button'>READ MORE</span></p>
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
        </div>
    )
}

export default LeftImageCard
