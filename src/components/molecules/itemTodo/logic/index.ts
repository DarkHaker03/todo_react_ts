import { createEvent, createStore } from 'effector';


export const deleteItemOfTodoList = createEvent<number>()
export const selectItemId = createEvent<number>()
export const selectItemForDelete = createEvent<number>()



export const $selectedItemIdForDelete = createStore<number>(0)
export const $selectedItemId = createStore<number>(0)