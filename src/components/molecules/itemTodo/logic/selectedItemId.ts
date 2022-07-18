import { createEvent, createStore } from 'effector';


export const selectItem = createEvent<number>()

export const $selectedItemId = createStore<number>(0)
	.on(selectItem, (_, x: number) => {
		return x
	})
