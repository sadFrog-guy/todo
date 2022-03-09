import {TodoAction, TodoActionTypes, ITodo} from "../../types";
import {Dispatch} from "redux";
import axios from "axios";

export const addTodo = (todo: ITodo): TodoAction => {
    return {type: TodoActionTypes.ADD_TODO, payload: todo}
}

export const deleteTodo = (id: number): TodoAction => {
    return {type: TodoActionTypes.DELETE_TODO, payload: id}
}

export const checkTodo = (todo: ITodo): TodoAction => {
    return {type: TodoActionTypes.CHECK_TODO, payload: todo}
}
