import thunk from 'redux-thunk';
import { applyMiddleware, createStore, configureStore } from '@reduxjs/toolkit';
import { mainReducer } from './reducers/mainReducer';
import { productsReducer } from './reducers/productsReducer';

// export const store = createStore(mainReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: {
    products: productsReducer
  }
});
