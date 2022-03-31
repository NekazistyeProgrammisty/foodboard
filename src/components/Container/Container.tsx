import * as React from 'react';

import Card from '../Card/Card';
import './Container.css'

interface ContainerProps {
    
}
 
const Container: React.FunctionComponent<ContainerProps> = () => {
    return ( 
        <>
            
            <div className='container'>
                <Card cardTitle='Блины с гавной' imgUrl='./bliny.png' ingredientMeter={[1, 2]}/>
                <Card cardTitle='Блины с гавной' imgUrl='./bliny.png' ingredientMeter={[1, 2]}/>
                <Card cardTitle='Блины с гавной' imgUrl='./bliny.png' ingredientMeter={[1, 2]}/>
                <Card cardTitle='Блины с гавной' imgUrl='./bliny.png' ingredientMeter={[1, 2]}/>
                <Card cardTitle='Блины с гавной' imgUrl='./bliny.png' ingredientMeter={[1, 2]}/>
            </div>
        </>
        
    );
}
 
export default Container;
