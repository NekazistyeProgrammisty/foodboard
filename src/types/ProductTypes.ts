import { ILoadable } from "./PublicTypes"

export interface IProduct {
    title: string,
    count: number,
    expirationDays: number,
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR',
    ADD_PRODUCT = 'ADD_PRODUCT'
}

export interface IProductsState extends ILoadable {
    products: IProduct[]
}

interface IFetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS
}

interface IAddProductsAction {
    type: ProductsActionTypes.ADD_PRODUCT
    payload: IProduct
}

interface IFetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: IProduct[]
}

interface IFetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}

export type IProductsAction = IFetchProductsAction | IFetchProductsSuccessAction | IFetchProductsErrorAction | IAddProductsAction