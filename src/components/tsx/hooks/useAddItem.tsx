import { useState } from "react"
import { IItemTodo, IUseAddItem } from "../interfaces"
export const useAddItem = ({ todo, inputTitleValue, inputTextValue, setTodo, setInputPutValue }: IUseAddItem) => {
	const [selectedCategory, setselectedCategory] = useState('any category')
	const itemCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setselectedCategory(event.target.value)
	}
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
		}
	}
	return { addItem, itemCategory, selectedCategory }
}