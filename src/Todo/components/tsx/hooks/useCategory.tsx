import { useCallback, useEffect, useState } from "react"
import { IItemTodo, IUseCategoryChange } from "../interfaces"
import { useInput } from "./useInput"

export const useCategory = (todo: IItemTodo[]): IUseCategoryChange => {
	const [category, setCategory, inputCategoryChange] = useInput()
	const optionsValue: string[] = [];
	for (let i of todo) {
		for (let a of i.category) {
			let b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : ''
		}
	}
	const [categories, setCategories] = useState<string[]>([...optionsValue])
	const addCategories: () => void = useCallback(() => {
		if (!categories.some(x => x == category) && category !== '') {
			setCategories(prev => [...prev, category])
			setCategory('')
			return
		}
		alert("This category already exists or category = ' ' !")
	}, [categories])
	useEffect(() => {
		if (localStorage.getItem("categories") === null) {
			localStorage.setItem("categories", JSON.stringify(categories))
		} else {
			setCategories(JSON.parse(localStorage.getItem("categories") || ''))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem("categories", JSON.stringify(categories))
	}, [categories])
	return {
		category,
		inputCategoryChange,
		addCategories,
		categories
	}
}