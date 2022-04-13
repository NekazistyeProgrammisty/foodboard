import * as React from 'react';

import './InputField.css'
import {ReactComponent as SearchIcon} from '../../images/SearchIcon.svg'
import {ReactComponent as AddIcon} from '../../images/add.svg'

interface IInputFieldProps {
    placeholder: string,
    data?: any[],
    type?: 'search' | 'add'
}
 
const InputField: React.FunctionComponent<IInputFieldProps> = ({ placeholder, data , type = 'search' } : IInputFieldProps) => {
    
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
                    <div className="inputIcon addIcon">
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
                <input type={'text'} placeholder={placeholder}/>
                {IconField()}
            </div>
            <div className="dataResult">

            </div>
        </div>
    );
}
 
export default InputField;