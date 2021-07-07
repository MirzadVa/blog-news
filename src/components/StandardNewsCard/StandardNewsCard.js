import React from 'react'
import './standard-news-card.css'

import resrveImage from '../../assets/reserve-image.jpg'

import moment from 'moment'
import { useHistory } from 'react-router'

import { BsPersonFill } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'

const StandardNewsCard = ({news}) => {
    const history = useHistory()

    const goToArticle = () => {
        history.push('/article', {
            imageUrl : news?.urlToImage, 
            title : news?.title, 
            date : news?.date,
            author : news?.author, 
            content : news?.content
        })
    }
    return (
        <div className='big-news-card-wrapper'>
            <img src={news?.urlToImage !== null ? news?.urlToImage : resrveImage} className='big-news-image' alt='news'/>
            <h4 className='news-headline' onClick={goToArticle}>{news?.title}</h4>
            <p className='news-description'>{news?.description?.substring(0,100)}... <span className='read-more-button'  onClick={goToArticle}>READ MORE</span></p>
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

export default StandardNewsCard
