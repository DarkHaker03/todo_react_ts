import { useState } from "react";
import { ITodo } from "../interfaces";
export const useRemoveItem = ({ todo, setTodo }: ITodo) => {
	const [confirmation, setConfirmation] = useState<boolean>(false)
	const [idForDelete, setidForDelete] = useState<number>(0)
	const removeItem = (id: number) => {
		setConfirmation(true)
		setidForDelete(id)
	}
	const removeItemConfirmation = (answer: string) => {
		setConfirmation(false)
		if (answer === 'yes') setTodo(todo.filter(x => x.id !== idForDelete))
	}
	return { removeItem, removeItemConfirmation, confirmation }
}