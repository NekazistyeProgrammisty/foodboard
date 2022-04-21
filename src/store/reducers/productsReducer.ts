/* eslint-disable max-len */
/* eslint-disable default-param-last */
import { IProductsAction, IProductsState, ProductsActionTypes } from '../../types/ProductTypes';

const initialState : IProductsState = {
	products: [],
	loading: false,
	error: null
};

export const productsReducer = (state : IProductsState = initialState, action : IProductsAction) : IProductsState => {
	switch (action.type) {
	case ProductsActionTypes.FETCH_PRODUCTS:
		return { products: [], loading: true, error: null };

	case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
		return { products: action.payload, loading: false, error: null };

	case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
		return { products: [], loading: false, error: action.payload };

	case ProductsActionTypes.ADD_PRODUCT:
		return { products: [...state.products, action.payload], loading: false, error: null };

	case ProductsActionTypes.REMOVE_PRODUCT:
		return {
			...state, products: state.products.filter((product, index) => index !== action.payload), loading: false, error: null
		};
	default:
		return state;
	}
};
