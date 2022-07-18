import { createEvent, createStore, sample } from "effector"

import { IItemTodo } from "../../itemTodo/ItemTodo";

import { $todoList } from "../../../../global/store/todoList/todoList"

interface ISetFilterData {
	title: string,
	selectedOptions: string[]
}

const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '');

export const setFilterData = createEvent<ISetFilterData>()

export const $filterData = createStore<ISetFilterData>({ title: '', selectedOptions: [] })
	.on(setFilterData, (_, x) => x)

export const setFilteredTodoList = createEvent<IItemTodo[]>()
export const $filteredTodoList = createStore<IItemTodo[]>([])
	.on(setFilteredTodoList, (_, x) => x)

sample({
	source: { todoList: $todoList, filterData: $filterData },
	fn: ({ todoList, filterData: { title, selectedOptions } }) => {
		if (title.length != 0 && selectedOptions.length == 0) {
			return todoList.filter(x => {
				return stringHandler(x.title).startsWith(stringHandler(title));
			})
		} else if (title.length != 0 && selectedOptions.length != 0) {
			return todoList.filter(x => {
				return stringHandler(x.title).startsWith(stringHandler(title))
					&&
					x.category.some(a => selectedOptions.includes(a))
			})
		} else if (title.length == 0 && selectedOptions.length != 0) {
			return todoList.filter(x => {
				return x.category.some(a => selectedOptions.includes(a))
			})
		}
		return todoList
	},
	target: setFilteredTodoList
})


// export const filterTodoList = () => {
// 	let filteredTodoList: IItemTodo[] = []
// 	const { title, selectedOptions } = $filterData.getState()
// 	const todoList = $todoList.getState()
// 	if (title.length != 0 && selectedOptions.length == 0) {
// 		filteredTodoList = todoList.filter(x => {
// 			return stringHandler(x.title).startsWith(stringHandler(title));
// 		})
// 	} else if (title.length != 0 && selectedOptions.length != 0) {
// 		filteredTodoList = todoList.filter(x => {
// 			return stringHandler(x.title).startsWith(stringHandler(title))
// 				&&
// 				x.category.some(a => selectedOptions.includes(a))
// 		})
// 	} else if (title.length == 0 && selectedOptions.length != 0) {
// 		filteredTodoList = todoList.filter(x => {
// 			return x.category.some(a => selectedOptions.includes(a))
// 		})
// 	} else {
// 		filteredTodoList = todoList
// 	}
// 	return filteredTodoList
// }
