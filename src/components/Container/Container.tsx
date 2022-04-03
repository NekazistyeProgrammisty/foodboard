import * as React from 'react';

import Card from '../Card/Card';
import './Container.css'
import cardsReqSimulation from '../../API/cardsReqSimulation.json'

interface ContainerProps {
    
}
 
const Container: React.FunctionComponent<ContainerProps> = () => {
    return (
        <main className='container'>
            <div className='grid-cardholder'>
                {cardsReqSimulation.map((element, id) =>
                    <Card
                        key={id}
                        cardTitle={element.title}
                        imgUrl={element.url}
                        ingredientMeter={element.ingredientMeter}
                    />
                )}
            </div>
        </main>
    );
}
 
export default Container;
