import { useState } from "react"
import { IItemTodo } from "../interfaces"
export const useTodo = () => {
	const [todo, setTodo] = useState<IItemTodo[]>([
		{ id: Date.now(), idx: 1, text: "Запись первая", category: "Здоровье" },
		{ id: Date.now() + 1, idx: 1, text: "Запись первая", category: "Здоро2вье" },
		{ id: Date.now() + 2, idx: 1, text: "Запись первая", category: "Здор4овье" },
		{ id: Date.now() + 3, idx: 1, text: "Запись первая", category: "Здоро3вье" },
		{ id: Date.now() + 4, idx: 1, text: "Запись первая", category: "Здоро5вье" },
	])
	return { todo, setTodo }
}