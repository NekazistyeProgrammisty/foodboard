import * as React from 'react';
import './Container.css';

interface ContainerProps {
	content?: React.ReactNode | null;
}

const Container: React.FunctionComponent<ContainerProps> =
	({ content }) => <main className="container">{content}</main>;

export default Container;
