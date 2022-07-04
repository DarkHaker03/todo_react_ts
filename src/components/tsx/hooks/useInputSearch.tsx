import { useState } from "react"
import { ITodo } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"
export const useInputSearch = ({ todo, setTodo }: ITodo) => {
	const [inputSearchValue, setinputSearchValue] = useState<string>('')
	// const [options, setOptions] = useState()
	// const [selectedOption, setselectedOption] = useState<string[]>([])
	const { itemCategory, selectedCategory } = useCategoryChange()
	const inputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setinputSearchValue(event.target.value)
	}
	const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '')
	const searchFilterTodo = todo.filter(x => {
		return stringHandler(x.title).startsWith(stringHandler(inputSearchValue))
	})

	// const selectChange = (event: React.MouseEvent<HTMLDivElement>) => {
	// 	const value: string = event.currentTarget.textContent || ''
	// 	if (selectedOption.every(x => x !== value) || selectedOption.length === 0) {
	// 		setselectedOption([...selectedOption, value])
	// 	} else {
	// 		setselectedOption(selectedOption.filter(x => x !== value))
	// 	}
	// }

	let filterCategoryTodo = searchFilterTodo.filter(x => x.category.some(a => selectedCategory.includes(a)))
	if (selectedCategory.length === 0) {
		filterCategoryTodo = searchFilterTodo
	}
	// console.log(selectedCategory)
	return { inputSearchValue, inputSearchChange, filterCategoryTodo, selectChange: itemCategory, selectedOption: selectedCategory }
}