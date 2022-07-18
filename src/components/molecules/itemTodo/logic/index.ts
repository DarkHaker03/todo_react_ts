import { createEvent, createStore } from 'effector';

import { $todoList } from '../../../../global/store/todoList/todoList';

export const selectItem = createEvent<number>()
export const selectItemForDelete = createEvent<number>()
export const deleteItemOfTodoList = createEvent<number>()


export const $selectedItemId = createStore<number>(0)
	.on(selectItem, (_, x: number) => {
		console.log(x)
		return x
	})

export const $selectedItemIdForDelete = createStore<number>(0)
	.on(selectItemForDelete, (_, x: number) => {
		console.log(x)
		return x
	})

$todoList
	.on(deleteItemOfTodoList, (state, x) => state.filter(i => i.id !== x))
