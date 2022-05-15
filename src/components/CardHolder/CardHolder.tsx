/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import axios from 'axios';
import Card, { CardProps } from '../Card/Card';
import SkeletonCard from '../Skeletons/Cards/SkeletonCard';

import './CardHolder.css';

const CardHolder: React.FunctionComponent = () => {
	const [currentList, setCurrentList] = React.useState<CardProps[]>([]);
	const [cardsFetched, setCardsFetched] = React.useState<boolean>(false);

	React.useEffect(() => {
		axios.get(
			'http://83.220.168.143:8081/profile/2/user_products/get_recipes'
		).then((res) => {
			console.log(res.data);
			setCurrentList(res.data);
			setCardsFetched(true);
		});
	}, []);

	return (
		<div className="grid-cardholder">
			{!cardsFetched &&
				[...Array(20).keys()].map((elment, id) => (
					<SkeletonCard key={id} />
				))}

			{cardsFetched &&
				currentList.map((element, id) => (
					<Card
						key={id || 0}
						title={element.title || ''}
						imgLink={element.imgLink || ''}
						ingredientMeter={[Math.trunc(Math.random() * (element.productsNum || 4)), 2] || ''}
						category={element.category || ''}
						productsNum={element.productsNum || 0}
					/>
				))}
		</div>
	);
};

export default CardHolder;
