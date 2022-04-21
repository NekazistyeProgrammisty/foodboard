/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../types/ProductTypes';
import Card from '../Card/Card';
import IconField from '../IconField/IconField';
import Modal from '../Modal/Modal';
import { removeProduct } from '../../store/action-creators/products';

import './ProductElement.css';

type IProductElement = {
	index: number
} & IProduct

const ProductElement: React.FunctionComponent<IProductElement> =
({
	title, count, expirationDays, index
}) => {
	const dispatch = useDispatch();

	const expiresAt = `${expirationDays} д.`;
	const [active, setActive] = React.useState<boolean>(false);

	const removeHandler = () : void => {
		dispatch(removeProduct(index));
	};

	return (
		<div className="product-wrapper">
			<Modal active={active} setActive={setActive}>
				<Card title="Pososi" imgUrl="" ingredientMeter={[1, 2]} />
			</Modal>
			<div className="product-info" onClick={() => setActive(true)}>
				<span>{title}</span>
				<div className="info-right-section">
					<span>{count}</span>
					<span>{expiresAt}</span>
				</div>
			</div>
			<div className="icon-wrapper" onClick={() => removeHandler()}>
				<IconField type="delete" />
			</div>
		</div>
	);
};

export default ProductElement;
