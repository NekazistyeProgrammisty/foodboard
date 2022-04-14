import * as React from 'react';
import { footerSections } from '../App';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Feed: React.FunctionComponent = () => (
	<>
		<Header />
		<main className="container" style={{ color: '#bbb' }}>
			Здесь ничего нет, но скоро будет!!!
		</main>
		<Footer sections={footerSections} />
	</>
);

export default Feed;
