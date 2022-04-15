import * as React from 'react';

import './InputField.css';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/action-creators/products';
import IconField from '../IconField/IconField';

interface IInputFieldProps {
	placeholder: string;
	data?: any[];
	type?: 'search' | 'add';
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({
	placeholder,
	data,
	type = 'search'
}) => {
	const [userValue, setUserValue] = React.useState<string>('');

	const dispatch = useDispatch();

	const AddProduct = () : void => {
		dispatch(addProduct({ title: userValue, count: 1, expirationDays: 1 }));
		setUserValue('');
	};

	const enterPressHandler = (
		event: React.KeyboardEvent<HTMLInputElement>
	) : void => {
		if (event.key === 'Enter') {
			AddProduct();
		}
	};

	const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
		setUserValue(event.target.value);
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					onKeyUp={enterPressHandler}
					type="text"
					onChange={userInputHandler}
					value={userValue}
					placeholder={placeholder}
				/>
				<IconField type={type} clickHandler={AddProduct} />
			</div>
			<div className="dataResult" />
		</div>
	);
};

export default InputField;
