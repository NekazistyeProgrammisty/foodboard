import * as React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';

import './Header.css';

interface IHeaderProps {
	title?: string
}

const Header: React.FC<IHeaderProps> = ({ title = 'Рецепты' }) => (
	<header>
		<IoChevronBackOutline size={32} />
		<span className="text-logo">{title}</span>
	</header>
);

export default Header;
