import * as React from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import './Header.css';

interface IHeaderProps {
	title?: string
}

const Header: React.FC<IHeaderProps> = ({ title = 'Рецепты' }) => {
	const navigate = useNavigate();
	return (
		<header>
			<IoChevronBackOutline
				onClick={() => navigate(-1)}
				size={32}
			/>
			<span className="text-logo">{title}</span>
		</header>
	);
};

export default Header;
