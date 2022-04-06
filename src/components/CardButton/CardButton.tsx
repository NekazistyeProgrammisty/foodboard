import * as React from 'react';

import './CardButton.css'

interface CardButtonProps {
    children: React.ReactNode | null;
    isSecond: boolean
    clickHandler?: (e: React.MouseEvent<HTMLElement>) => void
}

const CardButton: React.FunctionComponent<CardButtonProps> = (props) => {
    return (
        <div onClick={props.clickHandler} className={`card-button ${props.isSecond ? 'right-side-button' : ''}`}>
            {props.children}
        </div>
    );
}

export default CardButton;