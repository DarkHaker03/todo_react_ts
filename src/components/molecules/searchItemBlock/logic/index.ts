import { createEvent, createStore } from "effector"

import { IItemTodo } from "../../itemTodo/ItemTodo";

interface ISetFilterData {
	title: string,
	selectedOptions: string[]
}

export const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '');

export const setFilterData = createEvent<ISetFilterData>()

export const $filterData = createStore<ISetFilterData>({ title: '', selectedOptions: [] })

export const setFilteredTodoList = createEvent<IItemTodo[]>()
export const $filteredTodoList = createStore<IItemTodo[]>([])

