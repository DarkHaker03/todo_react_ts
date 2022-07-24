import { setTodoList } from './index';

interface I {
	inputValue: string,
	textAreaValue: string,
	selectedValue: string[],
	setInputValue: React.Dispatch<React.SetStateAction<string>>,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>,
}
export const useAddItemTodoList = ({ inputValue, textAreaValue, selectedValue, setInputValue, setTextAreaValue, setSelectedValue }: I) => {
	const addItemTodoList = () => {
		if (inputValue.length != 0) {
			setTodoList(
				{ title: inputValue, text: textAreaValue, category: selectedValue }
			)
			setInputValue('');
			setTextAreaValue('');
			setSelectedValue([]);
		}
	}
	return addItemTodoList
}