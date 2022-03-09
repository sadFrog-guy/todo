import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import cl from './TodoItem.module.css'
import {ITodo, TodoAction, TodoActionTypes} from "../../types";
import {useAction} from "../../hooks/useAction";

interface TodoItemProps {
    todo: ITodo,
    action: string,
}

const TodoItem: FC<TodoItemProps> = ({todo, action }) => {
    const markClasses = [cl.mark]
    const bubbleClasses = [cl.bubble]
    const {checkTodo, deleteTodo} = useAction()

    const actionBubble = (action: string) => {
        switch (action) {
            case 'delete':
                markClasses.push(cl.delete)
                bubbleClasses.push(cl.delete)
                return (
                    <div className={bubbleClasses.join(' ')}>
                        <div
                            onClick={() => {
                                deleteTodo(todo.id)
                            }}
                            className={markClasses.join(' ')}
                        />
                    </div>
                )
            case 'check':
                markClasses.push(cl.check)
                bubbleClasses.push(cl.check)
                return (
                    <div className={bubbleClasses.join(' ')}>
                        <div
                            onClick={() => {
                                checkTodo(todo)
                            }}
                            className={markClasses.join(' ')}
                        />
                    </div>
                )
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>

                <div className={cl.left_side}>
                    <div
                        className={cl.colored_line}
                        style={todo.checked ? {backgroundColor: 'darkgray'} : {backgroundColor: todo.color}}
                    />
                    <div className={cl.info}>
                        <p
                           className={cl.title}
                           style={todo.checked ? {textDecoration: '#232323 line-through'} : {}}
                        >
                            {todo.title}
                        </p>
                        <p
                            className={cl.text}
                            style={todo.checked ? {textDecoration: '#656565 line-through'} : {}}
                        >
                            {todo.body}
                        </p>
                    </div>
                </div>

                <div className={cl.right_side}>
                    <div className={cl.group}>
                        <p className={cl.text}>{todo.group}</p>
                    </div>
                    <div className={cl.check}>
                        {actionBubble(action)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TodoItem;