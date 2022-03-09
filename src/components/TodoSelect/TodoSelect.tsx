import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import cl from './TodoSelect.module.css'
import {errorState, ITodo, OptionType} from "../../types";

interface TodoSelectProps {
    standartOption: string,
    options: OptionType[]
    value: ITodo,
    setValue: Dispatch<SetStateAction<ITodo>>,
    setLastOption: Dispatch<SetStateAction<string>>
}

const TodoSelect: FC<TodoSelectProps> = (
    {
        standartOption,
        options,
        setValue,
        value,
        setLastOption
    }
) => {
    const [active, setActive] = useState<boolean>(false)
    const [isSelected, setIsSelected] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<string>('')
    const selectClasses = [cl.select]
    const optionClasses = [cl.options]
    const entireClasses = [cl.entire]

    if(active) {
        selectClasses.push(cl.active)
        optionClasses.push(cl.active)
        entireClasses.push(cl.active)
    }
    if(isSelected) {
        selectClasses.push(cl.selected)
    }

    const liOnClick = (option: OptionType) => {
        setIsSelected(true)
        setSelectedOption(option.name)
        setLastOption(option.name)
        setValue({...value, group: option.name})
        setActive(false)
    }

    return (
        <div className={cl.wrapper}>
            <div
                className={entireClasses.join(' ')}
                onClick={() => {
                    setActive(false)
                }}
            />
            <div
                className={selectClasses.join(' ')}
                onClick={() => {
                    active
                        ? setActive(false)
                        : setActive(true)
                }}
            >
                {isSelected ? selectedOption : standartOption}
            </div>
            <ul className={optionClasses.join(' ')}>
                {options.map((option) => {
                    return (
                        <li
                            className={cl.option}
                            onClick={() => liOnClick(option)}
                        >
                            {option.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default TodoSelect;