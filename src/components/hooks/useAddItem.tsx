import { IItemTodo, IUseAddItem } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"
export const useAddItem = ({ todoList, inputTitleValue, inputTextValue, setTodoList, setInputTitleValue, setInputTextValue }: IUseAddItem) => {
	const { itemCategory, selectedCategory, setselectedCategory } = useCategoryChange()
	const addItem = () => {
		if (inputTitleValue) {
			const newId = todoList[0] !== undefined ? todoList[0].idx + 1 : 1
			const newItem: IItemTodo = {
				id: Date.now(),
				idx: newId,
				title: inputTitleValue,
				text: inputTextValue,
				category: selectedCategory
			}
			setTodoList([newItem, ...todoList])
			setInputTitleValue('')
			setselectedCategory([])
			setInputTextValue('')
		}
	}
	// console.log(todo)
	return { addItem, itemCategory, selectedCategory }
}