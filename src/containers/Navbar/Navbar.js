import React, { useState } from 'react'
import './navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
    const [mobileClasses, setMobileClasses] = useState(['mobile-items'])
    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className='navbar-container'>
            <h3><span>N</span>ewsBlog</h3>
            <div className='hamburger-menu'>
                <GiHamburgerMenu 
                    style={{color: 'white', fontSize: '2em'}}
                    onClick={() => {
                        if(navOpen){
                            setNavOpen(false)
                            setMobileClasses(['mobile-items'])
                        }else{
                            setNavOpen(true)
                            setMobileClasses(['mobile-items', 'open'])
                        }
                    }}/>
            </div>
            <div className={mobileClasses.join(' ')}>
                <p>Home</p>
                <p>Contact</p>
                <p>About</p>
            </div>
            <ul className='navbar-ul'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Navbar
