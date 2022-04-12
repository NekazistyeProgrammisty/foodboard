import { ILoadable } from "./PublicTypes"

interface IProduct {
    title: string,
    count: number,
    expirationDays: number,
}

export enum ProductsActionTypes {
    FETCH_PRODUCTS = 'FETCH_PRODUCTS',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'
}

export interface IProductsState extends ILoadable {
    products: IProduct[]
}

interface IFetchProductsAction {
    type: ProductsActionTypes.FETCH_PRODUCTS
}

interface IFetchProductsSuccessAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload: IProduct[]
}

interface IFetchProductsErrorAction {
    type: ProductsActionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}

export type IProductsAction = IFetchProductsAction | IFetchProductsSuccessAction | IFetchProductsErrorAction