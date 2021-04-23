import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './sidebar.css'
import MenuItems from './menu-item/MenuItem'
import sidebarItems from './sidebarItems'

const Navbar = () => {

    const [links, setLinks] = useState([])

    useEffect(() => {
        const localLinks = [...links]
        sidebarItems.map(elem => {
            localLinks.push({...elem, active: false})  
        })
        localLinks[0].active = true
        setLinks([...localLinks])
    }, [])

    const changeActive = (linkId) => {
        const localLinks = [...links]
        localLinks.map(link => link.active = false)
        localLinks.map(link => {
            if(link.id === linkId){
                link.active = true
            }
        })
        setLinks([...localLinks])
    }

    return (
        <div className='sidebar-container'>
           <p className='menu-headline'>MENU</p>
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
                            active={elem.active}
                            />
                </Link>
            ))}
          
        </div>
    )
}

export default Navbar
