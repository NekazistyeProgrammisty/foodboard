/* eslint-disable react/jsx-wrap-multilines */
import axios from 'axios';
import * as React from 'react';
import { footerSections } from '../App';
import CardHolder from '../components/CardHolder/CardHolder';
import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';

const RecipesListPage: React.FunctionComponent = () => (
	<>
		<Header />
		<Container
			content={
				<>
					<InputField
						type="search"
						placeholder="Search for recipes..."
					/>
					<CardHolder />
				</>
			}
		/>
		<Footer sections={footerSections} />
	</>
);

export default RecipesListPage;
