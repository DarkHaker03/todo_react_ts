import { createEvent } from "effector"

import { $todoList } from "../../../../global/store/todoList/todoList"


export interface IItemTodoInUseTodoList {
	title: string,
	text: string,
	category: string[]
}

export const setTodoList = createEvent<IItemTodoInUseTodoList>()


$todoList
	.on(setTodoList, (state, newItem) => {
		let newIdx = state[0] ? state[0].idx + 1 : 0
		return [{ id: Date.now(), idx: newIdx, ...newItem }, ...state]
	})