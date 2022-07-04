import React, { useEffect, useState } from "react"
import { IItemTodo, ITodo } from "../interfaces"
import { useCategoryChange } from "./useCategoryChange"

export const useRedactItem = ({ todo, setTodo }: ITodo) => {
	const [redactItem, setRedactItem] = useState<IItemTodo>()
	// const [inputRedact, setInputRedact] = useState('')
	const { itemCategory, selectedCategory, setselectedCategory } = useCategoryChange()

	const selectRedactItemFunc = (id: number) => {
		let item = todo.filter(x => x.id === id)[0]
		setRedactItem(item);
		setselectedCategory(item.category)
	}
	// useEffect(() => {
	// 	setInputRedact(redactItem?.text !== undefined ? redactItem.text : '')
	// }, [redactItem])
	const redactItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setInputRedact(event.target.value)
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, title: event.target.value })
		}
	}
	const redactTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, text: event.target.value })
		}
	}
	// const redactItemChangeCategory = (event: React.MouseEvent<HTMLDivElement>) => {
	// 	// setInputRedact(event.target.value)
	// 	if (redactItem !== undefined) {
	// 		// setRedactItem({ ...redactItem, category: event.target.value })
	// 		console.log(event)
	// 	}
	// }
	useEffect(() => {
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, category: selectedCategory })
		}
	}, [selectedCategory])
	const itemCategoryRedact = itemCategory
	const redactItemFunc = () => {
		if (redactItem != undefined) {
			setTodo(todo.map(x => {
				if (x.id !== redactItem.id) {
					return x
				} else {
					return redactItem
				}
			}))
			// console.log(todo.map(x => {
			// 	if (x.id !== redactItem.id) {
			// 		return x
			// 	} else {
			// 		return redactItem
			// 	}
			// }))
		}
	}
	const cleanRedactItems = () => {
		setRedactItem(undefined)
		setselectedCategory([])
	}
	return { selectRedactItemFunc, redactItemChange, redactItem, itemCategoryRedact, redactItemFunc, redactTextChange, cleanRedactItems }
}