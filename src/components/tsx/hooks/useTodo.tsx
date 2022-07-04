import { useEffect, useState } from "react"
import { IItemTodo } from "../interfaces"
export const useTodo = () => {
	// const [todoLocalStorage, settodoLocalStorage] = useState('')
	const [todo, setTodo] = useState<IItemTodo[]>([
		{ id: Date.now() + 2, idx: 2, title: "Запись третья", text: "Текст третьей записи", category: ["Работа", "Работа", "Спорт", "Здоровье", "Спорт"] },
		{ id: Date.now() + 1, idx: 1, title: "Запись вторая", text: "Текст второй записи", category: ["Спорт"] },
		{ id: Date.now(), idx: 0, title: "Запись первая", text: "Текст первой записи", category: ["Здоровье"] },
	])

	useEffect(() => {
		if (localStorage.getItem('todo') === "[]" || localStorage.getItem('todo') === null) {
			console.log("todo === null")
			localStorage.setItem('todo', JSON.stringify(todo))
		} else {
			console.log("todo !== null")
			setTodo(JSON.parse(localStorage.getItem('todo') || ''))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo))
	}, [todo])
	// console.log(todoLocalStorage)
	return { todo, setTodo }
}