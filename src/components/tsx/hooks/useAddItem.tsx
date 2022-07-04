import { useState } from "react"
import { IItemTodo, IUseAddItem } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"
export const useAddItem = ({ todo, inputTitleValue, inputTextValue, setTodo, setInputPutValue, setInputTextValue }: IUseAddItem) => {
	const { itemCategory, selectedCategory, setselectedCategory } = useCategoryChange()
	const addItem = () => {
		if (inputTitleValue) {
			const newId = todo[0] !== undefined ? todo[0].idx + 1 : 1
			const newItem: IItemTodo = {
				id: Date.now(),
				idx: newId,
				title: inputTitleValue,
				text: inputTextValue,
				category: selectedCategory
			}
			setTodo([newItem, ...todo])
			setInputPutValue('')
			setselectedCategory([])
			setInputTextValue('')
		}
	}
	// console.log(todo)
	return { addItem, itemCategory, selectedCategory }
}