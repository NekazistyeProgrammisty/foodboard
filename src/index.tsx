import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import {
	BrowserRouter, Route, Routes, Navigate
} from 'react-router-dom';

import { store } from './store/store';
import App from './routes/LoginPage';
import './index.css';
import FavoritesPage from './routes/favorites';
import Feed from './routes/feed';
import RecipesListPage from './routes/getrecipes';
import ProductsPage from './routes/products';
import UserPage from './routes/user';
import Footer from './components/Footer/Footer';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

export const footerSections = [
	'Feed',
	'Products',
	'Get Recipes',
	'User',
	'Favorite'
];

const loggedIn = false;

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={(
							<Navigate
								to={!loggedIn ? '/auth' : '/getrecipes'}
							/>
						)}
					/>
					<Route path="/auth" element={<App />} />
					<Route path="/getrecipes" element={<RecipesListPage />} />
					<Route path="/feed" element={<Feed />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/user" element={<UserPage />} />
					<Route path="/favorite" element={<FavoritesPage />} />
				</Routes>
				<Footer sections={footerSections} />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
);
