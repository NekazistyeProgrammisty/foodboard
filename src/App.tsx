import * as React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InputField from './components/InputField/InputField';
import Wrapper from './components/Wrapper/Wrapper';
import Button from './components/Button/Button';

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
		paddingTop: '4.5rem',
		paddingBottom: 0,
		alignItems: 'center',
		height: 'calc(100% - 9rem)'
	};

	const [userLogin, setUserLogin] = React.useState<string>('');
	const [userPassword, setUserPassword] = React.useState<string>('');

	const userLoginChangeHandler = (login: string) : void => {
		setUserLogin(login);
	};

	const userPasswordChangeHandler = (password: string) : void => {
		setUserPassword(password);
	};

	return (
		<>
			<Header />
			{/* <Container /> */}
			<main className="container" style={styles}>
				<Wrapper>
					<InputField outerInputHandler={userLoginChangeHandler} placeholder="Ваш логин" />
					<InputField outerInputHandler={userPasswordChangeHandler} placeholder="Пароль" type="password" />
					<Button text="Войти" />

					{userLogin}
					<br />
					{userPassword}
				</Wrapper>
			</main>
			<Footer sections={footerSections} />
		</>
	);
};

export default App;
