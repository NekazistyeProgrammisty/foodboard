import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import './index.css'
import FavoritesPage from './routes/favorites';
import Feed from './routes/feed';
import RecipesListPage from './routes/getrecipes';
import ProductsPage from './routes/products';
import UserPage from './routes/user';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path={'/foodboard'} element={<App />}/>
            <Route path={'/getrecipes'} element={<RecipesListPage />} />
            <Route path={'/feed'} element={<Feed />} />
            <Route path={'/products'} element={<ProductsPage />} />
            <Route path={'/user'} element={<UserPage />} />
            <Route path={'/favorite'} element={<FavoritesPage />} />
        </Routes>
    </BrowserRouter>
);
