import { IItemTodo } from "../../../itemTodo/ItemTodo";

import { redactTodoList } from '../index';

interface IUseRedactItemTodoList {
	seletedItemId: number,
	seletedItem: IItemTodo,
	setInputValue: React.Dispatch<React.SetStateAction<string>>,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>,
	inputValue: string,
	textAreaValue: string,
	selectedValue: string[]
}


export const useRedactItemTodoList = ({ seletedItem, seletedItemId, setInputValue, setSelectedValue, setTextAreaValue, inputValue, textAreaValue, selectedValue }: IUseRedactItemTodoList) => {
	const redactItemTodoList = () => {
		if (seletedItem !== undefined) {
			redactTodoList(
				{
					id: seletedItemId,
					idx: seletedItem.idx,
					title: inputValue,
					text: textAreaValue,
					category: selectedValue,
				}
			)
			setInputValue('');
			setTextAreaValue('');
			setSelectedValue([]);
		}
	}
	return redactItemTodoList
}