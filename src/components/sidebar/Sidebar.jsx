// eslint-disable-line react-hooks/exhaustive-deps
import React, { useState } from 'react'

import './sidebar.css'

import FullSidebar from './full-sidebar/FullSidebar'


const Sidebar = () => {

    const [smallSidebar, setSmallSidebar] = useState(false)

    const toggleSidebars = () => {
        setSmallSidebar(!smallSidebar)
    }
 
    return (
        <FullSidebar small={smallSidebar} toggleSidebar={toggleSidebars}/>
    )
}

export default Sidebar
