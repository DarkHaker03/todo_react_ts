import { useEffect, useState } from "react"
import { json } from "stream/consumers"
import { IItemTodo } from "../interfaces"
export const useTodo = () => {
	const [todoLocalStorage, settodoLocalStorage] = useState('')
	const [todo, setTodo] = useState<IItemTodo[]>([
		{ id: Date.now() + 2, idx: 2, text: "Запись третья", category: "Работа" },
		{ id: Date.now() + 1, idx: 1, text: "Запись вторая", category: "Спорт" },
		{ id: Date.now(), idx: 0, text: "Запись первая", category: "Здоровье" },
	])

	useEffect(() => {
		if (localStorage.getItem('todo') === null) {
			localStorage.setItem('todo', JSON.stringify(todo))
		} else {
			setTodo(JSON.parse(localStorage.getItem('todo') || ''))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])
	// console.log(todoLocalStorage)
	return { todo, setTodo }
}