import React, { useEffect, useState } from "react"
import { IItemTodo, ITodo } from "../interfaces"

export const useRedactItem = ({ todo, setTodo }: ITodo) => {
	const [redactItem, setRedactItem] = useState<IItemTodo>()
	// const [inputRedact, setInputRedact] = useState('')

	const selectRedactItemFunc = (id: number) => {
		setRedactItem(todo.filter(x => x.id === id)[0]);
	}
	// useEffect(() => {
	// 	setInputRedact(redactItem?.text !== undefined ? redactItem.text : '')
	// }, [redactItem])
	const redactItemChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// setInputRedact(event.target.value)
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, text: event.target.value })
		}
	}
	const redactItemChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
		// setInputRedact(event.target.value)
		if (redactItem !== undefined) {
			setRedactItem({ ...redactItem, category: event.target.value })
		}
	}
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
	return { selectRedactItemFunc, redactItemChange, redactItem, redactItemChangeCategory, redactItemFunc }
}