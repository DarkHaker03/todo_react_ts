import { createEffect, createEvent, createStore } from "effector"
import { IItemTodo } from "../../../components/molecules/itemTodo/ItemTodo";



export const categoriesAdd = createEvent<string>()
export const caregoriesFullChange = createEvent<string[]>()
export const todoListListener = createEvent<IItemTodo[]>();



export const $categories = createStore<string[]>([])




export const categoriesLocalStorageUpdateFx = createEffect((state: string[]) => {
	localStorage.setItem('categories', JSON.stringify(state));
})