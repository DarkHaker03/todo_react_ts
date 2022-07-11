import { useCallback, useState } from "react";
import { ITodoList } from "../interfaces";
export const useRemoveItem = ({ todoList, setTodoList }: ITodoList) => {
	const [confirmation, setConfirmation] = useState<boolean>(false)
	const [idForDelete, setidForDelete] = useState<number>(0)
	const removeItem = useCallback((id: number) => {
		setConfirmation(true)
		setidForDelete(id)
	}, [])
	const removeItemConfirmation = useCallback((answer: string) => {
		setConfirmation(false)
		if (answer === 'yes') setTodoList(todoList.filter(x => x.id !== idForDelete))
	}, [idForDelete])
	return { removeItem, removeItemConfirmation, confirmation }
}