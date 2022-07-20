import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';

export const mainReducer = combineReducers({
  products: productsReducer
});

export type MainState = ReturnType<typeof mainReducer>;
