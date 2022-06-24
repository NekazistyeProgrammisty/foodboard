import * as React from 'react';
import styled from 'styled-components';

interface IButtonProps {
    text: string
    clickHandler?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const StyledButton = styled.button`
	background-color: var(--primarycolor);
    border: 0;
    min-height: 2.2rem;
    border-radius: 10px;
    color: var(--txtcolor);
    font-size: 0.95rem;
    font-weight: 700;
`;

const Button: React.FunctionComponent<IButtonProps> = ({ text, clickHandler }) => (
	<StyledButton
		type="button"
		className="button"
		onClick={clickHandler}
	>
		{text}
	</StyledButton>
);

export default Button;
