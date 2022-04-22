import * as React from 'react';
import { footerSections } from '../App';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const UserPage: React.FunctionComponent = () => (
	<>
		<Header title="Аккаунт" />
		<main className="container" style={{ color: '#bbb' }}>
			Тут тоже пока ничего нет!!!
		</main>
		<Footer sections={footerSections} />
	</>
);

export default UserPage;
