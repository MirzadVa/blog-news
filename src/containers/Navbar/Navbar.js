import React, { useState } from 'react'
import './navbar.css'

import { GiHamburgerMenu } from 'react-icons/gi'
import { useHistory } from 'react-router-dom'

const Navbar = () => {
    const [mobileClasses, setMobileClasses] = useState(['mobile-items'])
    const [navOpen, setNavOpen] = useState(false)
    const history = useHistory()

    const goToHome = () => {
        history.push('/home')
    }
    return (
        <div className='navbar-wrapper'>
            <div className='navbar-container'>
                <h3 onClick={goToHome}><span>N</span>ewsBlog</h3>
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
                    <p onClick={goToHome}>Home</p>
                    <p>Search</p>
                    <p>About</p>
                </div>
                <ul className='navbar-ul'>
                    <li onClick={goToHome}>Home</li>
                    <li onClick={() => history.push('/search')}>Search</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
