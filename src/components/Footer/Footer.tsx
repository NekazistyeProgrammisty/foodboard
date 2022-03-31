import * as React from 'react';

import './Footer.css'

interface IFooterProps {
    sections : string[]
}

const Footer : React.FC<IFooterProps> = (props : IFooterProps) => {

    return ( 
        <footer>
            <a href="/">{props.sections[0]}</a>
            <a href="/">{props.sections[1]}</a>
            <a href="/">{props.sections[2]}</a>
            <a href="/">{props.sections[3]}</a>
            <a href="/">{props.sections[4]}</a>
        </footer>
    );
}
 
export default Footer;