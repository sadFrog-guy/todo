import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import cl from './TodoRadioButton.module.css'
import {ITodo, RadioButton} from "../../types";

interface TodoRadioButtonProps {
    value: ITodo,
    setValue: Dispatch<SetStateAction<ITodo>>,
    radioButtons: RadioButton[],
}

const TodoRadioButton: FC<TodoRadioButtonProps> = ({value, setValue, radioButtons}) => {
    const [selectedRadio, setSelectedRadio] = useState<number>(0)

    return (
        <div className={cl.wrapper}>
            {radioButtons.map((radio, index) => {
                return (
                    <div className={cl.content} key={index}>
                        <div
                            onClick={() => {
                                setSelectedRadio(index)
                                setValue({...value, color: radio.buttonColor})
                            }}
                            className={cl.radio}
                            style={{border: `2px solid ${radio.buttonColor}`}}
                        >
                            {selectedRadio === index
                                ? <div className={cl.radio_checked} style={{backgroundColor: radio.buttonColor}}/>
                                : <div/>
                            }
                        </div>
                        {radio.label
                            ? <p className={cl.label}>{radio.label}</p>
                            : <p/>
                        }
                    </div>
                )
            })}
        </div>
    );
};

export default TodoRadioButton;