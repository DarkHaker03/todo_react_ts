import { useEffect } from "react"
import { IItemTodo } from "../../../itemTodo/ItemTodo"

interface IUseSelectedItemUpdate {
	seletedItemId: number,
	seletedItem: IItemTodo,
	setInputValue: React.Dispatch<React.SetStateAction<string>>,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>
}

export const useSelectedItemUpdate = ({ seletedItem, seletedItemId, setInputValue, setSelectedValue, setTextAreaValue }: IUseSelectedItemUpdate) => {
	useEffect(() => {
		if (seletedItemId !== 0 && seletedItem !== undefined) {
			setInputValue(seletedItem.title)
			setTextAreaValue(seletedItem.text)
			setSelectedValue(seletedItem.category)
		} else if (seletedItemId !== 0 && seletedItem === undefined) {
			setInputValue('')
			setTextAreaValue('')
			setSelectedValue([])
		}
	}, [seletedItem])
}