import * as React from 'react';
import './Wrapper.css';

interface IWrapperProps {
	children: React.ReactNode

}

const Wrapper: React.FunctionComponent<IWrapperProps> = ({ children }) => {
	const asd = 'asda';

	return (
		<div
			className="wrapper"
		>
			{children}
		</div>
	);
};

export default Wrapper;
