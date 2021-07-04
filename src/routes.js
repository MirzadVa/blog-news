import React from 'react'

import MainPage from './containers/pages/MainPage/MainPage'
import ArticlePage from './containers/pages/ArticlePage/ArticlePage';

const items = [
    {
        id: 1,
        name: 'Home',
        path: '/home',
        component: <MainPage />,
        exact:true
    },
    {
        id: 1,
        name: 'Article',
        path: '/article',
        component: <ArticlePage />,
        exact:true
    },
    
   
]

export default items;