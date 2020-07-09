import React from 'react';
import './burgermenu.css'

const DrawerToggleButton = props => (
    <button className='toggle-button' onClick={props.drawerClickHandler} >
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
        <div className='toggle-button__line'></div>
    </button>

);

export default DrawerToggleButton;
