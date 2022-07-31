import { createEvent } from "effector"

export interface INewItemTodo {
	title: string,
	text: string,
	category: string[]
}

export const setTodoList = createEvent<INewItemTodo>()

