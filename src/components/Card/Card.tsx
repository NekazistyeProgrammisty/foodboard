/* eslint-disable jsx-a11y/interactive-supports-focus */
import * as React from 'react';

import './Card.css';
import { ReactComponent as Grocery } from '../../assets/images/Grocery.svg';
import { ReactComponent as TurnAround } from '../../assets/images/turnaround.svg';
import CardButton from '../CardButton/CardButton';
import CardAvatar from '../CardAvatar/CardAvatar';

// className={`card back ${!flipped ? '' : 'flipped'}`}

export interface CardProps {
  imgLink: string;
  title: string;
  ingredientMeter: number[];
  recipeId?: number,
  description?: string,
  productsNum?: number,
  category: string
}

export const Card: React.FunctionComponent<CardProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  imgLink,
  title,
  ingredientMeter,
  description,
  category,
  productsNum,
  recipeId
}) => {
  const [flipped, setFlipped] = React.useState<boolean>(false);
  const [displayTitle, setDisplayTitle] = React.useState<string>(
    title.length > 40 ? `${title.substring(0, 37)}...` : title
  );
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
  const amountMeter = `${ingredientMeter[0]} / ${productsNum}`;
  return (
    <div className={`card-wrapper ${flipped ? 'flipped' : ''}`}>
      <div className="card front">
        <CardAvatar src={imgLink} />
        <p className="card-title">{displayTitle}</p>
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
          <div className="card-back-description">{description}</div>
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
