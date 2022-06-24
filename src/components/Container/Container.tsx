import * as React from 'react';
import './Container.css';

interface ContainerProps {
	children?: React.ReactNode | null;
}

const Container: React.FunctionComponent<ContainerProps> =
	({ children }) => <main className="container">{children}</main>;

export default Container;
