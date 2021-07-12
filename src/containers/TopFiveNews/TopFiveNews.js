import React from 'react'
import './top-five-news.css'

import MainNewsCard from '../../components/MainNewsCard/MainNewsCard'
import { Row, Col } from 'react-bootstrap'

const TopSevenNews = ({topFiveNews}) => {
    return (
        <Row className='top-headlines'>
            {topFiveNews.length > 0 && topFiveNews.map((elem, index) => (
                <Col lg={4} md={12} className='news-box'>
                    <MainNewsCard 
                        imageUrl = {elem.urlToImage}
                        title = {elem.title}
                        date = {elem.date}
                        author = {elem.author}
                        content = {elem.content}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default TopSevenNews
