import { useState } from "react"
import { ITodoList } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"
import { useInput } from "./useInput"
export const useInputSearch = ({ todoList, setTodoList }: ITodoList) => {
	const [inputSearchValue, setinputSearchValue, inputSearchChange] = useInput()
	const { itemCategory, selectedCategory } = useCategoryChange()
	const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '')
	const searchFilterTodo = todoList.filter(x => {
		return stringHandler(x.title).startsWith(stringHandler(inputSearchValue))
	})
	let filterCategoryTodo = searchFilterTodo.filter(x => x.category.some(a => selectedCategory.includes(a)))
	if (selectedCategory.length === 0) {
		filterCategoryTodo = searchFilterTodo
	}
	return { inputSearchValue, inputSearchChange, filterCategoryTodo, selectChange: itemCategory, selectedOption: selectedCategory }
}