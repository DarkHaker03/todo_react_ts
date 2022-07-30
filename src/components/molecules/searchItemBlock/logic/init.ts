import { sample } from "effector";
import { $filterData, $filteredTodoList } from ".";
import { $todoList } from "../../../../global/store/todoList";
import { setFilteredTodoList, stringHandler, setFilterData } from './index'

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


$filterData
	.on(setFilterData, (_, state) => state)

$filteredTodoList
	.on(setFilteredTodoList, (_, state) => state)
