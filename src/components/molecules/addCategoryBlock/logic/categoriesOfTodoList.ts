import { sample } from 'effector'

import { $todoList } from '../../../../global/store/todoList/todoList'

import { caregoriesFullChange } from './categories'

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
