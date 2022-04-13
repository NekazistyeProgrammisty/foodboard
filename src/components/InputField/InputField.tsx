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

    const AddProduct = () => { dispatch(addProduct(
        {title: userValue, count: 1, expirationDays: 1 }
        ));
        setUserValue('');
    };

    const enterPressHandler = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
        if (event.key == 'Enter') {
            AddProduct();
        }
    }

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
                <input onKeyUp={enterPressHandler} type={'text'} onChange={userInputHandler} value={userValue} placeholder={placeholder}/>
                {IconField()}
            </div>
            <div className="dataResult">
            </div>
        </div>
    );
}
 
export default InputField;