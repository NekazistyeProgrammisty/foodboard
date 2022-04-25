import * as React from 'react';
import './Button.css';

interface IButtonProps {
    text: string
    clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: React.FunctionComponent<IButtonProps> = ({ text, clickHandler }) => {
	const buttonClass = 'button';
	return (
		<button
			type="button"
			className={buttonClass}
			onClick={clickHandler}
		>
			{text}
		</button>
	);
};

export default Button;
