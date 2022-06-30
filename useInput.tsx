// import { useState } from "react"
// import { IItemTodo } from "../interfaces"
// export const useInput = () => {
// 	const [todo, setTodo] = useState<IItemTodo[]>([
// 		{ id: Date.now(), idx: 1, text: "Запись первая" },
// 	])
// 	const [inputPutValue, setInputPutValue] = useState<string>('')
// 	const [inputSearchValue, setinputSearchValue] = useState<string>('')

// 	const inputPutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setInputPutValue(event.target.value)
// 	}
// 	const inputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		setinputSearchValue(event.target.value)
// 	}
// 	const addItem = () => {
// 		if (inputPutValue) {
// 			const newId = todo[0] !== undefined ? todo[0].idx + 1 : 1
// 			const newItem = {
// 				id: Date.now(),
// 				idx: newId,
// 				text: inputPutValue
// 			}
// 			setTodo([newItem, ...todo])
// 			setInputPutValue('')
// 		}
// 	}
// 	const removeItem = (id: number) => {
// 		setTodo(todo.filter(x => x.id !== id))
// 	}
// 	return { todo, setTodo, inputPutValue, inputPutChange, inputSearchValue, inputSearchChange, addItem, removeItem }
// }