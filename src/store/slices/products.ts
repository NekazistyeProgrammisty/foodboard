import { createSlice } from '@reduxjs/toolkit';
import { IProductsState } from '../../types/ProductTypes';

const initialState : IProductsState = {
  products: [],
  loading: false,
  error: null
};

export const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products.filter((product, id) => id !== action.payload);
    }
  }
});
