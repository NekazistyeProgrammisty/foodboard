import * as React from 'react';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button/Button';

const LoginPage: React.FC = () => {
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
			<main className="container">
				<Wrapper additionalClassName="scalable-input">
					<InputField
						outerInputHandler={userLoginChangeHandler}
						placeholder="Ваш логин"
					/>
					<InputField
						outerInputHandler={userPasswordChangeHandler}
						placeholder="Пароль"
						type="password"
					/>
					<Button text="Войти" />

					{userLogin}
					<br />
					{userPassword}
				</Wrapper>
			</main>
		</>
	);
};

export default LoginPage;
