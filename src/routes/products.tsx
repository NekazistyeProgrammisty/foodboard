import * as React from 'react';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import ProductsList from '../components/ProductsList/ProductsList';

const ProductsPage: React.FunctionComponent = () => (
  <>
    <Header title="Ваши продукты" />
    <main className="container" style={{ color: '#bbb' }}>
      <InputField placeholder={"Type a product's name..."} type="add" />
      <ProductsList />
    </main>
  </>
);
export default ProductsPage;
