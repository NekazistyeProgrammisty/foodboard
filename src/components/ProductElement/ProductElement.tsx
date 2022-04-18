/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';
import { IProduct } from '../../types/ProductTypes';
import Card from '../Card/Card';
import IconField from '../IconField/IconField';
import Modal from '../Modal/Modal';

import './ProductElement.css';

const ProductElement: React.FunctionComponent<IProduct> =
({ title, count, expirationDays }) => {
	const expiresAt = `${expirationDays} д.`;
	const [active, setActive] = React.useState<boolean>(false);

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
			<div className="icon-wrapper">
				<IconField type="delete" />
			</div>
		</div>
	);
};

export default ProductElement;
