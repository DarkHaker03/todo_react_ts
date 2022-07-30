import { createEvent } from "effector"

export interface IItemTodoInUseTodoList {
	title: string,
	text: string,
	category: string[]
}

export const setTodoList = createEvent<IItemTodoInUseTodoList>()

