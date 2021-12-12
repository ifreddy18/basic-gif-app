import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        // eslint-disable-next-line no-unused-expressions
        e.preventDefault(); // Previene la recarga del navegador
        
        if ( inputValue.trim().length > 2) {
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleOnChange }
            />
            {/* <button type="submit">Add category</button> */}
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};