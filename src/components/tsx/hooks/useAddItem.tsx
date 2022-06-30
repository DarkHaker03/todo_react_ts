import { useState } from "react"
import { IUseAddItem } from "../interfaces"
export const useAddItem = ({ todo, inputPutValue, setTodo, setInputPutValue }: IUseAddItem) => {
	const [selectedCategory, setselectedCategory] = useState('any category')
	const itemCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setselectedCategory(event.target.value)
	}
	const addItem = () => {
		if (inputPutValue) {
			const newId = todo[0] !== undefined ? todo[0].idx + 1 : 1
			const newItem = {
				id: Date.now(),
				idx: newId,
				text: inputPutValue,
				category: selectedCategory
			}
			setTodo([newItem, ...todo])
			setInputPutValue('')
		}
	}
	return { addItem, itemCategory, selectedCategory }
}