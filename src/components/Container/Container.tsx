import * as React from 'react';
import ProductsPage from '../../routes/products';
import './Container.css';

interface ContainerProps {
    content? : React.ReactNode | null
}
 
const Container: React.FunctionComponent<ContainerProps> = (props) => {
    

    return (
        <main className='container'>
            {props.content}
        </main>
    );
}
 
export default Container;
