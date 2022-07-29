import { createEvent, createStore } from 'effector';

export const selectItemForDelete = createEvent<number>()

export const $selectedItemIdForDelete = createStore<number>(0)
	.on(selectItemForDelete, (_, state) => state)