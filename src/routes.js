import { FaHome } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaLaughBeam } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';

import MainPage from './components/MainPage'
import SingleMoviePage from './components/SinglePage/SinglePage'
import AllMovies from './components/AllMovies/AllMovies'

import React from 'react'

const items = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome color='#76879D' />,
        activeIcon: <FaHome color='#e71d60'/>,
        path: '/home',
        component: <MainPage />,
        exact:true
    },
    {
        id: 2,
        name: 'All',
        icon: <FaCompass color='#76879D' />,
        activeIcon: <FaCompass color='#e71d60'/>,
        path: '/all',
        component: <AllMovies />
    },
    {
        id: 3,
        name: 'Movie',
        icon: <FaVideo color='#76879D' />,
        activeIcon: <FaVideo color='#e71d60'/>,
        path: '/movie',
        component: <SingleMoviePage />
    },
    {
        id: 4,
        name: 'TV Show',
        icon: <FaCouch color='#76879D' />,
        activeIcon: <FaCouch color='#e71d60'/>,
        path: '/series'
    },
    {
        id: 5,
        name: 'Top Rated',
        icon: <FaStar color='#76879D' />,
        activeIcon: <FaStar color='#e71d60'/>,
        path: '/top'
    },
    {
        id: 6,
        name: 'Comedy',
        icon: <FaLaughBeam color='#76879D' />,
        activeIcon: <FaLaughBeam color='#e71d60'/>,
        path: '/comedy'
    },
    {
        id: 7,
        name: 'Action',
        icon: <FaHotjar color='#76879D' />,
        activeIcon: <FaHotjar color='#e71d60'/>,
        path: '/action'
    },
   
]

export default items;