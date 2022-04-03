import * as React from 'react';

import './FooterElement.css';

interface FooterElementProps {
    children: React.ReactNode;
    text: string
}
 
const FooterElement: React.FunctionComponent<FooterElementProps> = (props) => {
    return (
        <div className="footer-element">
            {props.children}
            <span>{props.text}</span>
        </div>
    );
}
 
export default FooterElement;