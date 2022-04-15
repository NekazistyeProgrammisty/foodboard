import * as React from 'react';
import { Link } from 'react-router-dom';

import './FooterElement.css';

interface FooterElementProps {
	children: React.ReactNode;
	text: string;
}

const FooterElement: React.FunctionComponent<FooterElementProps> =
	({ text, children }) => (
		<Link
			to={`/${text.toLowerCase().replace(' ', '')}`}
			className="footer-element"
		>
			{children}
			<span>{text}</span>
		</Link>
	);

export default FooterElement;
