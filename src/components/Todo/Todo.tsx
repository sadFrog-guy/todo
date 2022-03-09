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
                    {state.todos.length !== 0
                        ? state.todos.map((todo) => {
                            return <TodoItem action={action} todo={todo}/>
                        })
                        :
                        <div className={cl.wrapper}>
                            <p className={cl.todo_notExist}>Вы еще не создали ни одного TODO<br/>Так создайте!</p>
                        </div>
                    }
                </div>
                <div className={cl.todo_options}>
                    <div className={cl.bubbles}>
                        <ActionBubble
                            onClick={() => setAction('delete')}
                            bubbleColor='darkred'
                        >
                            Удалить
                        </ActionBubble>
                        <ActionBubble
                            onClick={() => setAction('check')}
                        >
                            Чекнуть
                        </ActionBubble>
                    </div>
                    <DateBlock/>
                    <TodoForm/>
                </div>
            </div>
        </div>
    );
};

export default Todo;