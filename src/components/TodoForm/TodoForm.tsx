import React, {ChangeEvent, Dispatch, FC, useEffect, useState} from 'react';
import {useAction} from "../../hooks/useAction";
import {errorState, ITodo} from "../../types";
import cl from './TodoForm.module.css'
import TodoInput from "../TodoInput/TodoInput";
import TodoSelect from "../TodoSelect/TodoSelect";
import TodoRadioButton from "../TodoRadioButton/TodoRadioButton";
import TodoButton from "../TodoButton/TodoButton";

const TodoForm: FC = () => {
    const {addTodo} = useAction()

    const initialState: ITodo = {
        id: Date.now(),
        title: '',
        body: '',
        color: 'crimson',
        group: '',
        checked: false
    }

    const errorInitialState: errorState = {
        titleError: '',
        bodyError: '',
        titleDirty: false,
        bodyDirty: false
    }

    const [todo, setTodo] = useState<ITodo>(initialState)
    const [error, setError] = useState<errorState>(errorInitialState)
    const [isValid, setValid] = useState<boolean>(false)
    const [lastOption, setLastOption] = useState<string>('')

    useEffect(() => {
        if(error.titleError || error.bodyError) {
            setValid(true)
        }
    }, [error.titleError, error.bodyError])

    const titleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, title: e.target.value})

        if(e.target.value.length < 3 || e.target.value.length > 25) {
            setError({
                ...error,
                titleError: 'Title should not be less than 3 or more than 25 characters'
            })
            if(!e.target.value) {
                setError({...error, titleError: 'Title cannot be empty'})
            }
        } else {
            setError({...error, titleError: ''})
        }
    }

    const bodyOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo({...todo, body: e.target.value})

        if(e.target.value.length < 3 || e.target.value.length > 25) {
            setError({
                ...error,
                bodyError: 'Description must not be less than 3 or more than 25 characters'
            })
            if(!e.target.value) {
                setError({...error, bodyError: 'Description cannot be empty'})
            }
        } else {
            setError({...error, bodyError: ''})
        }
    }

    const inputOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'title':
                setError({...error, titleDirty: true})
                break
            case 'body':
                setError({...error, bodyDirty: true})
                break
        }
    }

    const createTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if(todo.title !== '' && todo.body !== '' && todo.group !== '') {
            addTodo(todo)
            setTodo({...initialState, group: lastOption})
        }
    }

    return (
        <form className={cl.form_wrapper}>
            <TodoButton
                onClick={(e) => createTodo(e)}
                disabled={!isValid}
            >
                Create
            </TodoButton>
            {(error.titleDirty && error.titleError) && <p className={cl.error}>{error.titleError}</p>}
            <TodoInput
                name='title'
                placeholder="Title"
                value={todo.title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => titleOnChange(e)}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => inputOnBlur(e)}
            />
            {(error.bodyDirty && error.bodyError) && <p className={cl.error}>{error.bodyError}</p>}
            <TodoInput
                name='body'
                type="text"
                value={todo.body}
                placeholder="Description"
                onChange={(e: ChangeEvent<HTMLInputElement>) => bodyOnChange(e)}
                onBlur={(e: React.FocusEvent<HTMLInputElement>) => inputOnBlur(e)}
            />
            <TodoSelect
                standartOption='Group'
                options={
                    [{name: 'Work'}, {name: 'Study'}, {name: 'Private'}]
                }
                setValue={setTodo}
                value={todo}
                setLastOption={setLastOption}
            />
            <div className={cl.color_picker}>
                <p className={cl.text}>Choose color:</p>
                <TodoRadioButton
                    value={todo}
                    setValue={setTodo}
                    radioButtons={[
                        {buttonColor: 'crimson'},
                        {buttonColor: 'royalblue'},
                        {buttonColor: 'chartreuse'},
                        {buttonColor: 'gold'},
                    ]}
                />
            </div>
        </form>
    );
};

export default TodoForm;