import { createEvent, createStore } from "effector";

export const categoriesAdd = createEvent<string>()
export const caregoriesFullChange = createEvent<string[]>()

export const $categories = createStore<string[]>([])
	.on(categoriesAdd, (state, inputValue) => {
		if (!state.some(x => x === inputValue) && inputValue !== '') {
			return [...state, inputValue]
		}
		alert('This category already exists or category = " "!');
	})
	.on(caregoriesFullChange, (state, x) => x)