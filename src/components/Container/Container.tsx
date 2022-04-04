import * as React from 'react';

import { Card , CardProps} from '../Card/Card';
import './Container.css';
import cardsReqSimulation from '../../API/cardsReqSimulation.json';
import SkeletonElement from '../Skeletons/SkeletonElement';
import SkeletonCard from '../Skeletons/Cards/SkeletonCard';

interface ContainerProps {
    
}
 
const Container: React.FunctionComponent<ContainerProps> = () => {
    const [currentList, setCurrentList] = React.useState<CardProps[]>([]);

    React.useEffect(() => {
        setTimeout(() => {
            setCurrentList(cardsReqSimulation)
        }, 150)
    }, []);

    return (
        <main className='container'>
            <div className='grid-cardholder'>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />

                {currentList.map((element, id) =>
                    <Card
                        key={id}
                        title={element.title}
                        imgUrl={element.imgUrl}
                        ingredientMeter={element.ingredientMeter}
                    />
                )}
            </div>
        </main>
    );
}
 
export default Container;
