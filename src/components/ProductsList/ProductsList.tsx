/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { fetchProducts } from '../../store/action-creators/products';

const ProductsList: React.FunctionComponent = () => {
	const { products, error, loading } = useTypedSelector(
		(store) => store.products
	);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	return (
		<>
			{loading ? (
				<h1>Идёт загрузка</h1>
			) : error ? (
				<h1> Пососи!!! </h1>
			) : (
				<h3>Вот это - типа хранилище продуктов пользователя</h3>
			)}

			{products.map((product, index) => (
				<div key={index}>{product.title}</div>
			))}
		</>
	);
};

export default ProductsList;