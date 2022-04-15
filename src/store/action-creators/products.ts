import { Dispatch } from 'redux';

import {
	IProduct, IProductsAction, IProductsState, ProductsActionTypes
} from '../../types/ProductTypes';
// https://jsonplaceholder.typicode.com/users

const fakeResponseFromApi : IProductsState = {
	products: [
		{
			title: 'Напас',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Лавандос',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Пачка папирос',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Прыщ на жопе (волосней оброс)',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Я не обсос',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Получи в ебасос',
			count: 1,
			expirationDays: 1
		},
		{
			title: 'Ответь скорее на мой главный вопрос',
			count: 1,
			expirationDays: 1
		}
	],
	error: null,
	loading: false
};

export const fetchProducts = () => async (dispatch : Dispatch<IProductsAction>) => {
	try {
		dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS });

		setTimeout(() => {
			dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS, payload: fakeResponseFromApi.products });
		}, 500);
	} catch (error) {
		dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: "Chto-to slomalos', pososi!!!" });
	}
};

export const addProduct = (product: IProduct) => async (dispatch : Dispatch<IProductsAction>) => {
	try {
		setTimeout(() => {
			dispatch({ type: ProductsActionTypes.ADD_PRODUCT, payload: product });
		}, 50);
	} catch (error) {
		dispatch({ type: ProductsActionTypes.FETCH_PRODUCTS_ERROR, payload: "Chto-to slomalos', pososi!!!" });
	}
};
