import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { sample } from 'effector'

import { $todoList } from '../todoList/useTodoList'
import { caregoriesFullChange } from '../../../components/molecules/addCategoryBlock/logic/index'



sample({
	source: $todoList,
	fn: (todoList) => {
		const optionsValue: string[] = [];
		for (const i of todoList) {
			for (const a of i.category) {
				const b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : '';
			}
		}
		console.log("optionsValue:", optionsValue)
		return optionsValue
	},
	target: caregoriesFullChange
})


export const useCategorieOfTodoList = () => {
	// 	const todoList = useStore($todoList)
	// 	const optionsValue: string[] = [];
	// 	useEffect(() => {
	// 		for (const i of todoList) {
	// 			for (const a of i.category) {
	// 				const b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : '';
	// 			}
	// 		}
	// 		caregoriesFullChange(optionsValue)
	// 	}, [])
}