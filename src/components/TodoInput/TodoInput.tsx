import React from 'react';
import cl from './TodoInput.module.css'

const TodoInput = ({...props}) => {
    return (
        <input
            type="text"
            className={cl.input}
            {...props}
        />
    );
};

export default TodoInput;