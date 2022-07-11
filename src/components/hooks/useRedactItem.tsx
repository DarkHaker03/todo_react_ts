import React, { useCallback, useEffect, useState } from "react"
import { IItemTodo, ITodoList } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"

export const useRedactItem = ({ todoList, setTodoList }: ITodoList) => {
	const [redactItem, setRedactItem] = useState<IItemTodo>()
	const { itemCategory, selectedCategory, setselectedCategory } = useCategoryChange()
	const selectRedactItemFunc = useCallback((id: number) => {
		let item = todoList.filter(x => x.id === id)[0]
		setRedactItem(item);
		setselectedCategory(item.category)
	}, [todoList])
	const redactItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, title: event.target.value })
		}
	}
	const redactTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, text: event.target.value })
		}
	}
	useEffect(() => {
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, category: selectedCategory })
		}
	}, [selectedCategory])
	const itemCategoryRedact = itemCategory
	const redactItemFunc = () => {
		if (redactItem != undefined) {
			setTodoList(todoList.map(x => {
				if (x.id !== redactItem.id) {
					return x
				} else {
					return redactItem
				}
			}))
		}
	}
	const cleanRedactItems = () => {
		setRedactItem(undefined)
		setselectedCategory([])
	}
	return { selectRedactItemFunc, redactItemChange, redactItem, itemCategoryRedact, redactItemFunc, redactTextChange, cleanRedactItems }
}