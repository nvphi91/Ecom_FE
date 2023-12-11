import React, { useState } from 'react';
import { Input } from 'antd';
import './InputForm.scss';
const InputComponent = (props) => {
    // const [value, setValue] = useState()
    
    const { placeholder = '',name, value, onChangeValue, ...rest } = props

    const onChange = (e) => {
        // console.log(e.target.value);
        onChangeValue(e.target.value, name)
    }

    return (
        <Input
            className='input_container'
            // value={value}
            placeholder={placeholder}
            onChange={onChange}
            {...rest} >
        </Input>
    );
}

export default InputComponent;