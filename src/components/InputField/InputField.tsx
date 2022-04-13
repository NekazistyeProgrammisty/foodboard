import * as React from 'react';

import './InputField.css'
import {ReactComponent as SearchIcon} from '../../images/SearchIcon.svg'
import {ReactComponent as AddIcon} from '../../images/add.svg'
import { addProduct } from '../../store/action-creators/products';
import { useDispatch } from 'react-redux';

interface IInputFieldProps {
    placeholder: string,
    data?: any[],
    type?: 'search' | 'add'
}
 
const InputField: React.FunctionComponent<IInputFieldProps> = ({ placeholder, data , type = 'search' } : IInputFieldProps) => {

    const [userValue, setUserValue] = React.useState<string>('');

    const dispatch = useDispatch();

    const AddProduct = () => { dispatch(addProduct({ title: userValue, count: 1, expirationDays: 1 })) };

    const userInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserValue(event.target.value);
    };

    const IconField = () => {
        switch (type) {
            case 'search':
                return (
                    <div className="inputIcon searchIcon">
                        <SearchIcon />
                    </div>
                )
            case 'add':
                return (
                    <div onClick={AddProduct} className="inputIcon addIcon">
                        <AddIcon />
                    </div>
                )
            default:
                return;
        }
    }
    
    return (
        <div className="search">
            <div className="searchInputs">
                <input type={'text'} onChange={userInputHandler} placeholder={placeholder}/>
                {IconField()}
            </div>
            <div className="dataResult">
            </div>
        </div>
    );
}
 
export default InputField;