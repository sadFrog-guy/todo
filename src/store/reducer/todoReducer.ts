import {ITodo, TodoAction, TodoActionTypes, TodoState} from "../../types";

const checkTodo = (state: TodoState, payload: ITodo): TodoState => {
    const index = state.todos.findIndex(item => item.id === payload.id)
    const array = [...state.todos]

    array[index].checked = !payload.checked

    return {...state, todos: array}
}

const initialTodoState: TodoState = {
    todos: [],
}

export const todoReducer = (state = initialTodoState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {todos: [...state.todos, action.payload]}

        case TodoActionTypes.DELETE_TODO:
            return {todos: state.todos.filter(i => i.id !== action.payload)}

        case TodoActionTypes.CHECK_TODO:
            return checkTodo(state, action.payload)

        default:
            return state
    }
}