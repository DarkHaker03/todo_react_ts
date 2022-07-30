import { createEffect, createEvent, createStore } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

export interface ITodoList {
	todoList: IItemTodo[],
	setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}


export const setFullTodoList = createEvent<IItemTodo[]>()



export const $todoList = createStore<IItemTodo[]>([])



export const todoListLocalStorageUpdateFx = createEffect((state: IItemTodo[]) => {
	localStorage.setItem('todoList', JSON.stringify(state));
})