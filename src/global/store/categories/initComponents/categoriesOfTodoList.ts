import { sample, forward } from 'effector'

import { $todoList } from '../../todoList/index'

import { $categories, caregoriesFullChange, todoListListener } from '../index'


forward({
	from: $todoList,
	to: todoListListener
})

sample({
	source: $categories,
	clock: todoListListener,
	fn: (a, todoList) => {
		const optionsValue: string[] = a;
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
