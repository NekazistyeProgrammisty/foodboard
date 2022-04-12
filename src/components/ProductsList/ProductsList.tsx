import * as React from 'react';
import { useSelector } from 'react-redux';

interface IProductsListProps {
    
}
 
const IProductsList: React.FunctionComponent<IProductsListProps> = () => {
    const state = useSelector(store => store);
    console.log(state);
    
    
    return (<></>);
}
 
export default IProductsList;