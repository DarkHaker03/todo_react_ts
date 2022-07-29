import { createEvent, createStore } from 'effector';


export const selectItemId = createEvent<number>()

export const $selectedItemId = createStore<number>(0)
	.on(selectItemId, (_, state) => state)


