import React from 'react'

import './main-layout.css';

/*Component import*/
import Sidebar from '../components/sidebar/Sidebar';
import MainPage from '../components/MainPage'

const MainLayout = () => {
    return (
        <div className='main-content'>
            <Sidebar />
            <MainPage />
        </div>
    )
}

export default MainLayout

