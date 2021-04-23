import { FaHome } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaCouch } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaLaughBeam } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';
import { FaCompass } from 'react-icons/fa';

import React from 'react'

const items = [
    {
        id: 1,
        name: 'Home',
        icon: <FaHome color='#76879D' />,
        path: '/'
    },
    {
        id: 2,
        name: 'All',
        icon: <FaCompass color='#76879D' />,
        path: '/all'
    },
    {
        id: 3,
        name: 'Movie',
        icon: <FaVideo color='#76879D' />,
        path: '/movie'
    },
    {
        id: 4,
        name: 'TV Show',
        icon: <FaCouch color='#76879D' />,
        path: '/series'
    },
    {
        id: 5,
        name: 'Top Rated',
        icon: <FaStar color='#76879D' />,
        path: '/top'
    },
    {
        id: 6,
        name: 'Comedy',
        icon: <FaLaughBeam color='#76879D' />,
        path: '/comedy'
    },
    {
        id: 7,
        name: 'Action',
        icon: <FaHotjar color='#76879D' />,
        path: '/action'
    },
]

export default items;