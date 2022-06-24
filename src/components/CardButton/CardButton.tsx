/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from 'react';

interface CardButtonProps {
	children: React.ReactNode | null;
	isSecond: boolean;
	clickHandler?: (e: React.MouseEvent<HTMLElement>) => void;
}

const CardButton: React.FunctionComponent<CardButtonProps> = ({
	children,
	isSecond,
	clickHandler
}) => (
	<div
		onClick={clickHandler}
		className={`card-button ${isSecond ? 'right-side-button' : ''}`}
	>
		{children}
	</div>
);

export default CardButton;
