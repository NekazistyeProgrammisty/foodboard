import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/ProductTypes";

interface IUserProducts extends ILoadable {
  products: IProduct[],
}

const initialState: IUserProducts = {
  loading: false,
  error: null,
  products: [
    {
      title: 'Napas',
      count: 123,
      expirationDays: 1
    }
  ]
};

const UserProductsSlice = createSlice({
  name: 'userProducts',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        products: state.products.filter((_, index) => index !== action.payload)
      };
    }
  }
});

export const {
  addProduct,
  removeProduct
} = UserProductsSlice.actions;

export default UserProductsSlice.reducer;
