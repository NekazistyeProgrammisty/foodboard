import * as React from 'react';

import { footerSections } from '../App';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const FavoritesPage: React.FunctionComponent = () => (
	<>
		<Header />
		<main className="container" style={{ color: '#bbb' }}>
			Ну и здесь тоже ничего нет, но скоро обязательно будет!!!
		</main>
		<Footer sections={footerSections} />
	</>
);

export default FavoritesPage;