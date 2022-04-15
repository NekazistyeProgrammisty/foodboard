/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';

import { ReactComponent as SearchIcon } from '../../images/SearchIcon.svg';
import { ReactComponent as AddIcon } from '../../images/add.svg';

interface IIconFieldProps {
	type?: 'search' | 'add';
	clickHandler?: () => void;
}

const IconField: React.FunctionComponent<IIconFieldProps> = ({
	type = 'search',
	clickHandler
}) => {
	switch (type) {
	case 'search':
		return (
			<div className="inputIcon searchIcon">
				<SearchIcon />
			</div>
		);
	case 'add':
		return (
			<div
				tabIndex={0}
				role="button"
				onClick={clickHandler}
				className="inputIcon addIcon"
			>
				<AddIcon />
			</div>
		);
	default:
		return (
			<div className="inputIcon searchIcon">
				<SearchIcon />
			</div>
		);
	}
};

export default IconField;
