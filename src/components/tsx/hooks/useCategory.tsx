import React, { useEffect, useState } from "react"
import { IItemTodo } from "../interfaces"

export const useCategory = (todo: IItemTodo[]) => {
	const [localStorageCategorys, setlocalStorageCategorys] = useState('')
	const [category, setCategory] = useState<string>('')

	const optionsValue = Array.from(new Set(todo.map(x => {
		return x.category
	})))

	const [categories, setCategories] = useState<string[]>(['any category', ...optionsValue])
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