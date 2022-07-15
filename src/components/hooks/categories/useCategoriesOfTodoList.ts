import { useStore } from 'effector-react'
import { useEffect } from 'react'

import { $todoList } from '../todoList/useTodoList'
import { caregoriesFullChange } from '../../molecules/addCategoryBlock/AddCategoryBlock'


export const useCategorieOfTodoList = () => {
	const todoList = useStore($todoList)
	const optionsValue: string[] = [];
	useEffect(() => {
		for (const i of todoList) {
			for (const a of i.category) {
				const b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : '';
			}
		}
		caregoriesFullChange(optionsValue)
	}, [])
}