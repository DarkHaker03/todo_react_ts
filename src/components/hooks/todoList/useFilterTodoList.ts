import { createEvent, createStore } from "effector"

import { IItemTodo } from "../../molecules/itemTodo/ItemTodo";

import { $todoList } from "./useTodoList"

interface a {
	title: string,
	selectedOptions: string[]
}
const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '');

export const setFilterData = createEvent<a>()

export const $filterData = createStore<a>({ title: '', selectedOptions: [] })
	.on(setFilterData, (state, x) => {
		return x
	})


export const filterTodoList = () => {
	let a: IItemTodo[] = []
	const { title, selectedOptions } = $filterData.getState()
	const todoList = $todoList.getState()
	if (title.length != 0 && selectedOptions.length == 0) {
		a = todoList.filter(x => {
			return stringHandler(x.title).startsWith(stringHandler(title));
		})
	} else if (title.length != 0 && selectedOptions.length != 0) {
		a = todoList.filter(x => {
			return stringHandler(x.title).startsWith(stringHandler(title)) && x.category.some(a => selectedOptions.includes(a))
		})
	} else {
		a = todoList
	}
	return a
}

export const useFilterTodoList = () => {

}