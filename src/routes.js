import React from 'react'

import MainPage from './containers/pages/MainPage/MainPage'
import ArticlePage from './containers/pages/ArticlePage/ArticlePage';
import SearchPage from './containers/pages/SearchPage/SearchPage'

const items = [
    {
        id: 1,
        name: 'Home',
        path: '/home',
        component: <MainPage />,
        exact:true
    },
    {
        id: 2,
        name: 'Article',
        path: '/article',
        component: <ArticlePage />,
        exact:true
    },
    {
        id: 3,
        name: 'Search',
        path: '/search',
        component: <SearchPage />,
        exact:true
    },
    
   
]

export default items;