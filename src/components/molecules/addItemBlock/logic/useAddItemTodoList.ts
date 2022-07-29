import { setTodoList } from './index';

interface IUseAddItemTodoList {
	inputValue: string,
	textAreaValue: string,
	selectedValue: string[],
}
export const useAddItemTodoList = ({ inputValue, textAreaValue, selectedValue }: IUseAddItemTodoList) => {
	const addItemTodoList = () => {
		if (inputValue.length != 0) {
			setTodoList(
				{ title: inputValue, text: textAreaValue, category: selectedValue }
			)
		}
	}
	return addItemTodoList
}