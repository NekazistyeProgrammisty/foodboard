import React from 'react';

import './Header.css'

const Header = () => {
    return (  
        <header>
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H22" stroke="#F6E0B5" stroke-width="2" stroke-linecap="round"/>
                <path d="M1 8H22" stroke="#F6E0B5" stroke-width="2" stroke-linecap="round"/>
                <path d="M1 15H22" stroke="#F6E0B5" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span className='text-logo'>Рецепты</span>
        </header>
    );
}
 
export default Header;