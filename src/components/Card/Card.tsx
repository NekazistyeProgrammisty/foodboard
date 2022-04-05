import * as React from 'react';

import './Card.css'
import bliny2 from '../../images/bliny.png';
import {ReactComponent as Grocery} from '../../images/Grocery.svg';
import {ReactComponent as TurnAround} from '../../images/turnaround.svg';
import CardButton from '../CardButton/CardButton';

//className={`card back ${!flipped ? '' : 'flipped'}`}
 
export interface CardProps {
    imgUrl : string
    title : string
    ingredientMeter : number[]
}
 
export const Card: React.FunctionComponent<CardProps> = (props:CardProps) => {
    const [flipped, setFlipped] = React.useState<boolean>(false);

    const RETURN_TIMEOUT = 0;

    const flipHandler = () : void => {
        setFlipped(() => !flipped);
    }

    React.useEffect(() => {
        if (flipped && RETURN_TIMEOUT) {
            setTimeout(() => {
                setFlipped(false);
            }, RETURN_TIMEOUT);
        }
    }, [flipped])


    return (
        <div className={`relate ${flipped ? 'flipped' : ''}`}>
            <div className={`card front`}>
                <img className='avatar' alt='Фотография блюда' src={bliny2} />
                <p className='card-title'>{props.title}</p>
                <div className='lower-container'>
                    <CardButton isSecond={false}>
                        <Grocery />
                    </CardButton>
                    {props.ingredientMeter[0]} / {props.ingredientMeter[1]}
                    <CardButton clickHandler={flipHandler} isSecond={true}>
                        <TurnAround />
                    </CardButton>
                </div>
            </div>
            <div className={`card back`}> 
                <p className='card-title'>{props.title}</p>
                <div className='lower-container'>
                    <CardButton clickHandler={flipHandler} isSecond={true}>
                        <TurnAround />
                    </CardButton>
                </div>
            </div>
        </div>
        
    );
}
 
export default Card;