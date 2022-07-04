import { useState } from "react"
import { ITodo } from "../interfaces"
export const useInputSearch = ({ todo, setTodo }: ITodo) => {
	const [inputSearchValue, setinputSearchValue] = useState<string>('')
	// const [options, setOptions] = useState()
	const [selectedOption, setselectedOption] = useState<string>('any category')

	const inputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setinputSearchValue(event.target.value)
	}
	const stringHandler = (x: string) => x.toLowerCase().replace(/ /g, '')
	const searchFilterTodo = todo.filter(x => {
		return stringHandler(x.title).startsWith(stringHandler(inputSearchValue))
	})

	const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setselectedOption(event.target.value)
	}

	let filterCategoryTodo = searchFilterTodo.filter(x => x.category === selectedOption)
	if (selectedOption === 'any category') {
		filterCategoryTodo = searchFilterTodo
	}
	return { inputSearchValue, inputSearchChange, filterCategoryTodo, selectChange, selectedOption }
}