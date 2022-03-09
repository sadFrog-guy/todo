import React, {Dispatch, FC} from 'react';
import cl from './TodoButton.module.css'

interface TodoButtonProps {
    onClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled: boolean
}

const TodoButton: FC<TodoButtonProps> = (
    {
        onClick,
        children,
        disabled
    }
) => {

    return (
        <button disabled={disabled} onClick={onClick} className={cl.button}>
            {children}
        </button>
    );
};

export default TodoButton;