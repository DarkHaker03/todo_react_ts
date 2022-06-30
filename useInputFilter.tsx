// import React, { useState } from "react";
// import { IUseFilter } from "../interfaces";

// export const useInputFilter = ({ searchFilterTodo }: IUseFilter) => {
// 	const [filterCategoryTodo, setfilterCategoryTodo] = useState(searchFilterTodo)
// 	const [selectedValue, setselectedValue] = useState<string>('Здоровье')
// 	const [optionsValue, setoptionsValue] = useState<string[]>([])
// 	const selectValueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// 		const value = event.target.value
// 		setfilterCategoryTodo(filterCategoryTodo.filter(x => x.category === value))
// 		setselectedValue(value)
// 		// console.log(event.target.value)
// 	}
// 	let arr = Array.from(new Set(filterCategoryTodo.map(x => {
// 		return x.category
// 	})))

// 	console.log(arr)
// 	// setoptionsValue()
// 	return { selectValueChange, filterCategoryTodo, selectedValue, optionsValue }
// }