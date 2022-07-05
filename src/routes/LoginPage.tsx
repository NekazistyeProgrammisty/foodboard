import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import Wrapper from '../components/Wrapper/Wrapper';
import Button from '../components/Button/Button';
import StraightLine from '../components/StraightLine/StraightLine';

const InviteLink = styled.div`
	font-size: 14px;
    font-weight: 300;
    margin-top: 5px;
    color: #b73737;
`;

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
			<Header title="Login" />
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
				</Wrapper>
				<span
					style={{
						color: '#797979',
						fontSize: '14px',
						marginTop: '5px'
					}}
				>
					или...
				</span>
				<StraightLine />
				<InviteLink as={Link} className="invite-link" to="/">
					Зарегистрироваться
				</InviteLink>
			</main>
		</>
	);
};

export default LoginPage;
