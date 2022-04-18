import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { mainReducer } from './reducers/mainReducer';

export const store = createStore(mainReducer, applyMiddleware(thunk));
