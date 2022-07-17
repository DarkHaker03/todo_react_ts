import { createEvent, createStore } from 'effector';

export const selectItem = createEvent<number>()
export const selectItemForDelete = createEvent<number>()



export const $selectedItemId = createStore<number>(0)
export const $selectedItemIdForDelete = createStore<number>(0)
	.on(selectItemForDelete, (_, x: number) => {
		console.log(x)
		return x
	})


$selectedItemId
	.on(selectItem, (_, x: number) => {
		console.log(x)
		return x
	})