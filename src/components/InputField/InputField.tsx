/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import './InputField.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addProduct } from '../../store/action-creators/products';
import IconField from '../IconField/IconField';
import useDebounce from '../../hooks/useDebounce';

interface IInputFieldProps {
	placeholder: string;
	data?: any[];
	type?: 'search' | 'add' | 'delete' | 'password';
	outerInputHandler?: (newValue: string) => void;
}

const InputField: React.FunctionComponent<IInputFieldProps> = ({
	placeholder,
	data,
	type,
	outerInputHandler
}) => {
	const [userValue, setUserValue] = React.useState<string>('');
	const [suggestion, setSuggestions] = React.useState<string[]>([]);

	const debouncedValue = useDebounce(userValue, 500);

	const dispatch = useDispatch();

	const AddProduct = () : void => {
		if (userValue.trim().length) {
			dispatch(addProduct({ title: userValue, count: 1, expirationDays: 1 }));
			setUserValue('');
		}
	};

	const enterPressHandler = (
		event: React.KeyboardEvent<HTMLInputElement>
	) : void => {
		if (event.key === 'Enter') {
			AddProduct();
		}
	};

	const spellerCall = (value: string) : void => {
		axios.get<string, any>(
			`https://speller.yandex.net/services/spells
				ervice.json/checkText?text=${value.trim()}`
		).then((resp) => {
			const text = resp?.data.map((element: any) => element.s[0]);

			if (text) {
				if (JSON.stringify(text) === JSON.stringify(
					['Украина', 'легитимное', 'государство']
				)) {
					console.log('Пасаси лошара');
				} else {
					setSuggestions(text);
				}
			}
		});
	};

	React.useEffect(() => {
		console.log('Changed');

		if (type !== 'password' && type) {
			spellerCall(String(debouncedValue));
		}
	}, [debouncedValue]);

	const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
		setUserValue(event.target.value);
		if (outerInputHandler) {
			outerInputHandler(event.target.value);
		}
	};

	const inputClass = `${(type && (type !== 'password')) ? '' : 'smooth'}`;

	const searchClass = `${(type && (type !== 'password')) ? 'search' : 'search full'}`;

	return (
		<div className={searchClass}>
			<div className="searchInputs">
				<input
					onKeyUp={(type === 'add') ? enterPressHandler : undefined}
					type={`${type === 'password' ? 'password' : 'text'}`}
					onChange={userInputHandler}
					value={userValue}
					placeholder={placeholder}
					className={inputClass}
				/>
				{
					(type && type !== 'password') &&
					<IconField type={type} clickHandler={AddProduct} />
				}
			</div>
			<div className="dataResult">
				{/* eslint-disable-next-line react/no-array-index-key */}
				{suggestion.length !== 0 && (() => (
					<div
						className="data-element"
						onClick={() => {
							setUserValue(suggestion.join(' ').trim());
						}}
					>
						{suggestion.join(' ').trim()}
					</div>
				))()}
			</div>
		</div>
	);
};

export default InputField;
