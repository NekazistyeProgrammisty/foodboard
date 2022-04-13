import { IProductsAction, IProductsState, ProductsActionTypes } from "../../types/ProductTypes";


const initialState : IProductsState = {
    products: [{
        title: '',
        count: 0,
        expirationDays: 0,
    }],
    loading: false,
    error: null
}

export const productsReducer = (state : IProductsState = initialState, action : IProductsAction) : IProductsState => {
    switch (action.type) {
        case ProductsActionTypes.FETCH_PRODUCTS:
            return { products: [], loading: true, error: null }

        case ProductsActionTypes.FETCH_PRODUCTS_SUCCESS:
            return { products: action.payload, loading: false, error: null }

        case ProductsActionTypes.FETCH_PRODUCTS_ERROR:
            return { products: [], loading: false, error: action.payload }
        
        case ProductsActionTypes.ADD_PRODUCT:
            return { products: [...state.products, action.payload], loading: false, error: null }
        default:
            return state
    }
}