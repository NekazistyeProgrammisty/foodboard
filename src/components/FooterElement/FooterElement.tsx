import * as React from "react";
import { Link } from "react-router-dom";

import "./FooterElement.css";

interface FooterElementProps {
	children: React.ReactNode;
	text: string;
}

const FooterElement: React.FunctionComponent<FooterElementProps> = (props) => {
	return (
		<Link
			to={`/${props.text.toLowerCase().replace(" ", "")}`}
			className="footer-element"
		>
			{props.children}
			<span>{props.text}</span>
		</Link>
	);
};

export default FooterElement;
