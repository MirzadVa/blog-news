/* eslint-disable react/prop-types */

import React from 'react'

import './menu-item.css';

const MenuItem = (props) => {
    return (
        props.small ? (
            <div className='menu-item-wrapper'>
                <p className='menu-item smaller'>{props.active ? props.activeIcon : props.icon} 
                    {!props.small ? <span>{props.name}</span> : null}
                </p>
            </div>
        ) : ( 
            <div className='menu-item-wrapper'>
                <p className={props.active ? 'menu-item active-item' : 'menu-item'}>{props.active ? props.activeIcon : props.icon} 
                    {!props.small ? <span>{props.name}</span> : null}
                </p>
            </div>  
        )
    )
}

export default MenuItem
