/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'

import MenuItems from '../menu-item/MenuItem'
import sidebarItems from '../../../routes'
import './full-sidebar.css'

const FullSidebar = (props) => {
    
    const [links, setLinks] = useState([])

    const changeActive = (linkId) => {
        const localLinks = [...links]
        localLinks.forEach(link => link.active = false)
        localLinks.forEach(link => {
            if(link.id === linkId){
                link.active = true
            }
        })
        setLinks([...localLinks])
    }

    const setSidebarLinks = () => {
        const localLinks = [...links]
        sidebarItems.forEach(elem => {
            localLinks.push({...elem, active: false})  
        })
        localLinks[0].active = true
        return setLinks([...localLinks])
    }

    useEffect(() => {
        setSidebarLinks()
    }, [])

    return (
        <div className={props.small ? 'sidebar-container small' : 'sidebar-container'}>
            <p className='menu-headline' 
                onClick={props.toggleSidebar}>
                    <span className='menu-burger'>{ <FaBars /> }</span>
                    {!props.small ? 'MENU' : null}
            </p>
            {links.length > 0 && links.map((elem, index) => (
                <Link 
                    to={elem.path} 
                    key={index}
                    className='route-link'
                    onClick={() => {
                        changeActive(elem.id)
                    }}>
                        <MenuItems  
                            name={elem.name} 
                            icon={elem.icon}
                            activeIcon={elem.activeIcon} 
                            active={elem.active}
                            small={props.small}
                            />
                </Link>
            ))}
     </div>
    )
}

export default FullSidebar
