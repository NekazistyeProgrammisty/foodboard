import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { mainReducer } from "./reducers/mainReduxer";


export const store = createStore(mainReducer, applyMiddleware(thunk))

