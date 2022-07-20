/* eslint-disable jsx-a11y/click-events-have-key-events */
import * as React from 'react';

import { ReactComponent as SearchIcon } from '../../assets/images/SearchIcon.svg';
import { ReactComponent as AddIcon } from '../../assets/images/add.svg';
import { ReactComponent as RemoveIcon } from '../../assets/images/Delete.svg';

interface IIconFieldProps {
  type?: 'search' | 'add' | 'delete' | 'password';
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
  case 'delete':
    return (
      <div
        tabIndex={0}
        role="button"
        onClick={clickHandler}
        className="inputIcon deleteIcon"
      >
        <RemoveIcon />
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
