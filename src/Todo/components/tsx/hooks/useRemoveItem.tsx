import { useState } from "react";
import { ITodoList } from "../interfaces";
export const useRemoveItem = ({ todoList, setTodoList }: ITodoList) => {
	const [confirmation, setConfirmation] = useState<boolean>(false)
	const [idForDelete, setidForDelete] = useState<number>(0)
	const removeItem = (id: number) => {
		setConfirmation(true)
		setidForDelete(id)
	}
	const removeItemConfirmation = (answer: string) => {
		setConfirmation(false)
		if (answer === 'yes') setTodoList(todoList.filter(x => x.id !== idForDelete))
	}
	return { removeItem, removeItemConfirmation, confirmation }
}