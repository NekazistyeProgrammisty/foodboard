import * as React from 'react';
import './Wrapper.css';

interface IWrapperProps {
	children: React.ReactNode
	additionalStyles?: React.CSSProperties,
	additionalClassName?: string
}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({
	children,
	additionalStyles,
	additionalClassName = ''
}) => (
	<div className={`wrapper ${additionalClassName}`} style={additionalStyles}>
		{children}
	</div>
);

export default Wrapper;
