import * as React from 'react';

import { Card , CardProps} from '../Card/Card';
import './Container.css';
import cardsReqSimulation from '../../API/cardsReqSimulation.json';
import SkeletonCard from '../Skeletons/Cards/SkeletonCard';

interface ContainerProps {
    
}
 
const Container: React.FunctionComponent<ContainerProps> = () => {
    const [currentList, setCurrentList] = React.useState<CardProps[]>([]);
    //const [cardsFetched, setCardsFetched] = React.useState<boolean>(false);

    React.useEffect(() => {
        setTimeout(() => {
            setCurrentList(cardsReqSimulation)
            //setCardsFetched(true);
        }, 500)
    }, []);

    return (
        <main className='container'>
            <div className='grid-cardholder'>

                {!currentList.length && [...Array(40).keys()].map((elment, id) => <SkeletonCard key={id}/>)}

                

                {currentList.length && currentList.map((element, id) =>
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
