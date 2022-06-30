import React, { useState } from "react"
import { IItemTodo } from "../interfaces"

export const useCategory = (todo: IItemTodo[]) => {
	const [category, setCategory] = useState<string>('')

	const optionsValue = Array.from(new Set(todo.map(x => {
		return x.category
	})))

	const [categoryes, setCategoryes] = useState<string[]>(['any category', ...optionsValue])
	const inputCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(event.target.value)
	}

	const addCategoryes = () => {
		if (!categoryes.some(x => x == category) && category !== '') {
			setCategoryes([...categoryes, category])
			return
		}
		alert("This category already exists or category = ' ' !")
	}
	return {
		category,
		inputCategoryChange,
		addCategoryes,
		categoryes
	}
}