import * as React from 'react';
import './Button.css';

interface IButtonProps {
    text: string
    clickHandler?: void
}

const Button: React.FunctionComponent<IButtonProps> = ({ text, clickHandler }) => {
	const buttonClass = 'button';
	return (
		<button
			type="button"
			className={buttonClass}
		>
			{text}
		</button>
	);
};

export default Button;
