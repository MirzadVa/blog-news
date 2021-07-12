import React from 'react'
import './all-news.css'

import StandardNewsCard from '../../components/StandardNewsCard/StandardNewsCard'
import LeftImageCard from '../../components/LeftImageCard/LeftImageCard'
import MainNewsCard from '../../components/MainNewsCard/MainNewsCard'

import { Row, Col } from 'react-bootstrap'


const AllNews = ({restOfHeadlines, smallBoxes}) => {
    return (
        <Row className='all-news-wrapper'>
            {restOfHeadlines?.length > 0 && restOfHeadlines?.map((elem, index) => {
                if(index < 3){
                    return (
                        <Col lg={4} md={12} className='box-news'>
                             <StandardNewsCard key={index} news={elem}/>
                        </Col>
                    )
                }else{
                    return (
                            <Col lg={12} className='left-card'>
                                <LeftImageCard key={index} news={elem}/>
                            </Col>
                    )
                }  
            })}
            {smallBoxes.length > 0 ? smallBoxes.map(elem => (
                <Col lg={4} md={12} sm={12} className='news-box'>
                    <MainNewsCard 
                        imageUrl = {elem.urlToImage}
                        title = {elem.title}
                        date = {elem.date}
                        author = {elem.author}
                        content = {elem.content}
                    />
                </Col>
            ))  
             : null}
        </Row>
    )
}

export default AllNews
