import React, {FC, useEffect, useState} from 'react';
import cl from './Todo.module.css'
import TodoItem from "../TodoItem/TodoItem";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TodoForm from "../TodoForm/TodoForm";
import {ITodo} from "../../types";
import ActionBubble from "../ActionBubble/ActionBubble";
import DateBlock from '../Date/DateBlock'

const Todo: FC = () => {
    const state = useTypedSelector(state => state.todo)
    const [action, setAction] = useState<string>('check')

    return (
        <div className={cl.todo_wrapper}>
            <div className={cl.todo_content}>
                <div className={cl.todo_instances} style={state.todos.length > 4 ? {overflowY: 'scroll'} : {}}>
                    <div className={cl.bubbles}>
                        <ActionBubble
                            onClick={() => setAction('delete')}
                            bubbleColor='darkred'
                        >
                            Delete
                        </ActionBubble>
                        <ActionBubble
                            onClick={() => setAction('check')}
                        >
                            Check
                        </ActionBubble>
                    </div>
                    {state.todos.length !== 0
                        ? state.todos.map((todo) => {
                            return <TodoItem action={action} todo={todo}/>
                        })
                        :
                        <div className={cl.wrapper}>
                            <p className={cl.todo_notExist}>You haven't created any TODO yet<br/>Maybe you should create one?</p>
                        </div>
                    }
                </div>
                <div className={cl.todo_options}>

                    <DateBlock/>
                    <TodoForm/>
                </div>
            </div>
        </div>
    );
};

export default Todo;