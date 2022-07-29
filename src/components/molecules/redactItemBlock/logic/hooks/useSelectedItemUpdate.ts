import { useEffect } from "react"
import { IItemTodo } from "../../../itemTodo/ItemTodo"

interface IUseSelectedItemUpdate {
	selectedItem: IItemTodo,
	setInputValue: React.Dispatch<React.SetStateAction<string>>,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>
}

export const useSelectedItemUpdate = ({ selectedItem, setInputValue, setSelectedValue, setTextAreaValue }: IUseSelectedItemUpdate) => {
	useEffect(() => {
		if (selectedItem !== undefined) {
			setInputValue(selectedItem.title)
			setTextAreaValue(selectedItem.text)
			setSelectedValue(selectedItem.category)
		}
	}, [selectedItem])
}