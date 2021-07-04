import React from 'react'
import './main-news-card.css'

import moment from 'moment'
import { useHistory } from "react-router-dom";

import ReserveImage from '../../assets/reserve-image.jpg'

import { BsPersonFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'

const MainNewsCard = ({imageUrl, title, date, author, bigCard, content}) => {
    const history = useHistory()

    const goToArticle = () => {
        history.push('/article', {
            imageUrl, 
            title, 
            date,
            author, 
            content
        })
    }
    return (
        <div className='main-news-card-wrapper'>
            <img src={imageUrl !== null ? imageUrl : ReserveImage} className='news-image' alt='news'/>
            <div className='article-description'>
                <p className={bigCard ? 'news-card-title big-headline': 'news-card-title'} onClick={goToArticle}>{title}</p>
                <div className='date-author-wrapper'>
                    <p className='author-paragraph'>
                        <FaRegCalendarAlt style={{color: 'white'}} />
                        {moment(date).format('DD/MM/YYYY')}
                    </p>
                    <p className='author-paragraph'>
                        <BsPersonFill style={{color: 'white'}}/>
                        {author}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainNewsCard
