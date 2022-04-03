import * as React from 'react';

import './Card.css'
import bliny2 from '../../images/bliny.png';
import {ReactComponent as Grocery} from '../../images/Grocery.svg';
import {ReactComponent as TurnAround} from '../../images/turnaround.svg';
import CardButton from '../CardButton/CardButton';
 
export interface CardProps {
    imgUrl : string
    title : string
    ingredientMeter : number[]
}
 
export const Card: React.FunctionComponent<CardProps> = (props:CardProps) => {
    return (
        <div className="card">
            <img alt='Фотография блюда' src={bliny2} />
            <p>{props.title}</p>
            <div className='lower-container'>
                <CardButton isSecond={false}>
                    <Grocery />
                </CardButton>
                {props.ingredientMeter[0]} / {props.ingredientMeter[1]}
                <CardButton isSecond={true}>
                    <TurnAround />
                </CardButton>
            </div>
        </div>
    );
}
 
export default Card;