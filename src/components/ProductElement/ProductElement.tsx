import * as React from 'react';
import { IProduct } from '../../types/ProductTypes';
import IconField from '../IconField/IconField';

import './ProductElement.css';

const ProductElement: React.FunctionComponent<IProduct> =
({ title, count, expirationDays }) => {
	const expiresAt = `${expirationDays} д.`;

	return (
		<div className="product-wrapper">
			<div className="product-info">
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
