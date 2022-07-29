import { IItemTodo } from "../../../itemTodo/ItemTodo";

import { redactTodoList } from '../index';

interface IUseRedactItemTodoList {
	selectedItem: IItemTodo,
	inputValue: string,
	textAreaValue: string,
	selectedValue: string[]
}


export const useRedactItemTodoList = ({ selectedItem, inputValue, textAreaValue, selectedValue }: IUseRedactItemTodoList) => {
	const redactItemTodoList = () => {
		if (selectedItem !== undefined) {
			redactTodoList(
				{
					id: selectedItem.id,
					idx: selectedItem.idx,
					title: inputValue,
					text: textAreaValue,
					category: selectedValue,
				}
			)
		}
	}
	return redactItemTodoList
}