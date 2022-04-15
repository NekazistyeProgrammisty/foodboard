import * as React from 'react';

import './Card.css';
import bliny2 from '../../images/bliny.png';
import { ReactComponent as Grocery } from '../../images/Grocery.svg';
import { ReactComponent as TurnAround } from '../../images/turnaround.svg';
import CardButton from '../CardButton/CardButton';
import CardAvatar from '../CardAvatar/CardAvatar';

// className={`card back ${!flipped ? '' : 'flipped'}`}

export interface CardProps {
	imgUrl: string;
	title: string;
	ingredientMeter: number[];
}

export const Card: React.FunctionComponent<CardProps> = ({
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	imgUrl,
	title,
	ingredientMeter
}) => {
	const [flipped, setFlipped] = React.useState<boolean>(false);

	const RETURN_TIMEOUT = 0;

	const flipHandler = (): void => {
		setFlipped(() => !flipped);
	};

	React.useEffect(() => {
		if (flipped && RETURN_TIMEOUT) {
			setTimeout(() => {
				setFlipped(false);
			}, RETURN_TIMEOUT);
		}
	}, [flipped]);

	const amountMeter = `${ingredientMeter[0]} / ${ingredientMeter[1]}`;

	return (
		<div className={`card-wrapper ${flipped ? 'flipped' : ''}`}>
			<div className="card front">
				<CardAvatar src={bliny2} />
				<p className="card-title">{title}</p>
				<div className="lower-card-container">
					<CardButton isSecond={false}>
						<Grocery />
					</CardButton>
					{amountMeter}
					<CardButton clickHandler={flipHandler} isSecond>
						<TurnAround />
					</CardButton>
				</div>
			</div>
			<div className="card back">
				<div className="back-text-wrapper">
					<p className="card-back-title">{title}</p>
					<div className="card-back-description">
						Еслиб я имел коня - это был бы номер...
						<br />
						Еслиб конь имел меня - я б, наверно, помер...
					</div>
				</div>
				<div className="lower-card-container">
					<CardButton clickHandler={flipHandler} isSecond>
						<TurnAround />
					</CardButton>
				</div>
			</div>
		</div>
	);
};

export default Card;
