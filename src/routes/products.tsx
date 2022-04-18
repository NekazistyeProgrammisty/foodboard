import * as React from 'react';
import { footerSections } from '../App';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import InputField from '../components/InputField/InputField';
import Modal from '../components/Modal/Modal';
import ProductsList from '../components/ProductsList/ProductsList';

const ProductsPage: React.FunctionComponent = () => {
	const [active, setActive] = React.useState<boolean>(false);

	return (
		<>
			<Header />
			<main className="container" style={{ color: '#bbb' }}>
				<button type="button" onClick={() => setActive(true)}>Show modal</button>
				<InputField placeholder="Search for recipes..." />
				<InputField placeholder={"Type a product's name..."} type="add" />
				Посмотрите в консоль: я интегрировал Redux)))))))))))
				<ProductsList />
				<Modal active={active} setActive={setActive} />
			</main>
			<Footer sections={footerSections} />
		</>
	);
};
export default ProductsPage;
