import React, { useEffect, useState } from "react"
import { IItemTodo } from "../interfaces"

export const useCategory = (todo: IItemTodo[]) => {
	const [localStorageCategorys, setlocalStorageCategorys] = useState('')
	const [category, setCategory] = useState<string>('')

	// const optionsValue = Array.from(new Set(todo.map(x => {
	// 	return x.category
	// })))
	const optionsValue: string[] = [];
	for (let i of todo) {
		for (let a of i.category) {
			let b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : ''
		}
	}
	// console.log(optionsValue)
	const [categories, setCategories] = useState<string[]>([...optionsValue])
	const inputCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(event.target.value)
	}
	const addCategoryes = () => {
		if (!categories.some(x => x == category) && category !== '') {
			setCategories([...categories, category])
			setCategory('')
			return
		}
		alert("This category already exists or category = ' ' !")
	}
	useEffect(() => {
		if (localStorage.getItem("categorys") === null) {
			localStorage.setItem("categorys", JSON.stringify(categories))
		} else {
			setCategories(JSON.parse(localStorage.getItem("categorys") || ''))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem("categorys", JSON.stringify(categories))
	}, [categories])
	return {
		category,
		inputCategoryChange,
		addCategoryes,
		categories
	}
}