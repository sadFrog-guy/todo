export enum TodoActionTypes {
    ADD_TODO='ADD_TODO',
    DELETE_TODO='DELETE_TODO',
    CHECK_TODO='CHECK_TODO',
}

interface TodoAddAction {
    type: TodoActionTypes.ADD_TODO,
    payload: ITodo
}
interface TodoDeleteAction {
    type: TodoActionTypes.DELETE_TODO,
    payload: number
}
interface TodoCheckAction {
    type: TodoActionTypes.CHECK_TODO,
    payload: ITodo
}

export type TodoAction =
    TodoAddAction
    | TodoDeleteAction
    | TodoCheckAction

export interface ITodo {
    id: number,
    title: string,
    body: string,
    color: string,
    group: string,
    checked: boolean,
}

export interface TodoState {
    todos: ITodo[],
}

export interface errorState {
    titleError: string,
    bodyError: string,
    titleDirty: boolean,
    bodyDirty: boolean,
}

export interface RadioButton {
    buttonColor: string,
    label?: string
}

export interface OptionType {
    name: string,
}