import { createEvent, createStore } from "effector"

export const setConfirm = createEvent<boolean>()

export const $confirm = createStore<boolean>(false)
	.on(setConfirm, (_, x) => x)
