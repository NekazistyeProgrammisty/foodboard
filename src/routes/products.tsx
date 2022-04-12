import * as React from 'react';
import { footerSections } from '../App';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductsList from '../components/ProductsList/ProductsList';

interface ProductsPageProps {
    
}
 
const ProductsPage: React.FunctionComponent<ProductsPageProps> = () => {
    return (
        <>
            <Header />
                <main className='container' style={{color: '#bbb'}}>
                    Здесь тоже ничего нет, но скоро будет!!!
                    <ProductsList />
                </main>
            <Footer sections={footerSections}/>
        </>
    );
}
 
export default ProductsPage;