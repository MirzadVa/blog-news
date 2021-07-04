import React, { useEffect, useState } from 'react'
import './article-page.css'

import { BsFillPersonFill } from 'react-icons/bs'
import { TiSocialFacebook } from 'react-icons/ti'
import { RiTwitterFill } from 'react-icons/ri'
import { AiOutlineMail } from 'react-icons/ai'
import { FaViber } from 'react-icons/fa'

import ReserveImage from '../../../assets/reserve-image.jpg'
import PopularCard from '../../../components/PopularCard/PopularCard'
import Loading from '../../../components/Loading/Loading'

import apiRequest from '../../../helper/apiRequest'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

const ArticlePage = () => {
    const { title, content, author, date, imageUrl} = useLocation().state

    const [isLoaded, setIsLoaded] = useState(false)
    const [latestNews, setLatestNews] = useState([])
    const fetchLatest  = async() => {
        try{
            const response = await apiRequest({
                url: 'top-headlines?country=us&pageSize=10',
                method: 'get'
            })
            if(response.data.status === 'ok'){
                setLatestNews(response.data.articles)
                setIsLoaded(true)
            }
        }catch(err) {

        }
    }
    useEffect(() => {
        fetchLatest()
    }, [])
    return (
        !isLoaded ? (
            <Loading />
        ) : (
        <div className='main-content'>
            <div className='article-page-wrapper'>
                <div className='headline-wrapper'>
                    <h1>{title !== null ? title : 'No title has been provided'}</h1>
                </div>
                <div className='article-content-wrapper'>
                    <div className='social-container'>
                        <div className='date-author-wrapper'>
                            <div>
                                <BsFillPersonFill style={{fontSize: '40px', color: '#D1D5DB'}}/>
                            </div>
                            <div className='author-name-date'>
                                <p className='social-author-name'>{author}</p>
                                <p className='social-author-date'>{moment(date).fromNow()}</p>      
                            </div>
                        </div>
                        <div className='social-icons'>
                            <TiSocialFacebook style={socialIconsStyle}/>
                            <RiTwitterFill style={socialIconsStyle}/>
                            <AiOutlineMail style={socialIconsStyle}/>
                            <FaViber style={socialIconsStyle}/>
                        </div>
                    </div>
                    <div className='article-content'>
                        <div className='text-image-wrapper'>
                            <div className='article-image-wrapper'>
                                <img src={imageUrl !== null ? imageUrl : ReserveImage} alt='images-article' className='images-article'/>
                                <div className='mobile-author-date'>
                                    <p>{author}</p>
                                    <p  >{moment(date).fromNow()}</p> 
                                </div>
                            </div>
                            <div className='article-text-wrapper'>
                                {content !== null ? <p className='article-text'>{content} <b>IT SAYS THAT DEVS NEED TO PAY FOR THE FULL CONTENT</b> </p> : 'No content has been provided.'}
                            </div>
                        </div>
                    </div>
                    <div className='similar-articles-wrapper'>
                        <div className='popular-wrapper'>
                            <p className='head-pop'>Latest</p>
                            {latestNews.length > 0 && latestNews.map((elem, index) => (
                                <PopularCard article={elem} key={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    )
}

export default ArticlePage
const socialIconsStyle = {
    color: '#D1D5DB',
    fontSize: '20px',
    cursor: 'pointer'
}