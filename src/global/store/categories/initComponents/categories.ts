import { forward } from "effector";
import { $categories, caregoriesFullChange, categoriesAdd } from "..";

$categories
	.on(categoriesAdd, (state, inputValue) => {
		if (!state.some(x => x === inputValue) && inputValue !== '') {
			return [...state, inputValue]
		}
		alert('This category already exists or category = " "!');
	})


forward({
	from: caregoriesFullChange,
	to: $categories
})