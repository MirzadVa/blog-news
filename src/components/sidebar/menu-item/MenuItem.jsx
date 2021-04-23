/* eslint-disable react/prop-types */
import React from 'react'

import './menu-item.css';

const MenuItem = (props) => {
    return (
        <div className='menu-item-wrapper'>
            <p className={props.active ? 'menu-item active-item' : 'menu-item'}>{props.icon} <span>{props.name}</span></p>
        </div>
    )
}

export default MenuItem

// MenuItem.propTypes = {
//     icon: null,
//     name: String,
//     active: Boolean
// };
