import * as React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const footerSections = [
	'Feed',
	'Products',
	'Get Recipes',
	'User',
	'Favorite'
];

const App: React.FC = () => {
	const styles = {
		color: '#bbb',
		justifyContent: 'center',
		paddingTop: '4.5rem',
		paddingBottom: 0,
		alignItems: 'center',
		height: 'calc(100% - 9rem)'
	};

	return (
		<>
			<Header />
			{/* <Container /> */}
			<main className="container" style={styles}>
				<span style={{ textAlign: 'center' }}>
					Здрасьте.
					<br />
					Тыкайте кнопки в футере, и восхищайтесь
					<br />
					огромным количеством доступного функционала!
				</span>

			</main>
			<Footer sections={footerSections} />
		</>
	);
};

export default App;
