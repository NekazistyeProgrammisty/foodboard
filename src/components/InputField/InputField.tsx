/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import * as React from 'react';

import './InputField.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
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
	const [suggestion, setSuggestions] = React.useState<string[]>([]);

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

	React.useEffect(() => {
		axios.get<string, any>(
			`https://speller.yandex.net/services/spells
				ervice.json/checkText?text=${userValue}`
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
	}, [userValue]);

	const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) : void => {
		setUserValue(event.target.value);
	};

	return (
		<div className="search">
			<div className="searchInputs">
				<input
					onKeyUp={(type === 'add') ? enterPressHandler : undefined}
					type="text"
					onChange={userInputHandler}
					value={userValue}
					placeholder={placeholder}
				/>
				<IconField type={type} clickHandler={AddProduct} />
			</div>
			<div className="dataResult">
				{/* eslint-disable-next-line react/no-array-index-key */}
				{suggestion && suggestion.map((element: string, id: number) => (
					<div
						key={id}
						className="data-element"
						onClick={() => {
							setUserValue(element);
						}}
					>
						{element}
					</div>
				))}
			</div>
		</div>
	);
};

export default InputField;
