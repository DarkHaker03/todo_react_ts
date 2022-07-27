import { createEffect, forward } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

import { $todoList, setFullTodoList } from './todoList'

export const todoListLocalStorageStartFx = createEffect((state = $todoList) => {
	if (localStorage.getItem('todoList') === null) {
		localStorage.setItem('todoList', JSON.stringify(state));
	} else {
		setFullTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
	}
})
todoListLocalStorageStartFx()

const todoListLocalStorageUpdateFx = createEffect((state: IItemTodo[]) => {
	console.log("a1")
	localStorage.setItem('todoList', JSON.stringify(state));
})
forward({
	from: $todoList,
	to: todoListLocalStorageUpdateFx
})
