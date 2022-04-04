import * as React from 'react';

import './CardButton.css'

interface CardButtonProps {
    children: React.ReactNode | null;
    isSecond: boolean
}
 
const CardButton: React.FunctionComponent<CardButtonProps> = (props) => {
    return ( 
        <div className={`cardbutton ${props.isSecond ? 'secondbutton' : ''}`}>
            {props.children}
        </div>
    );
}
 
export default CardButton;