import * as React from 'react';

import './Header.css'

const Header : React.FC = () => {
    return (  
        <header>
            <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H22" stroke="#F6E0B5" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 8H22" stroke="#F6E0B5" strokeWidth="2" strokeLinecap="round" />
                <path d="M1 15H22" stroke="#F6E0B5" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className='text-logo'>Рецепты</span>
        </header>
    );
}

export default Header;