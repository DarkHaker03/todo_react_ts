import { useCallback, useState } from "react"
export const useCategoryChange = () => {
	const [selectedCategory, setselectedCategory] = useState<string[]>([])
	const itemCategory = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		const value: string = event.currentTarget.textContent || ''
		if (selectedCategory.every(x => x !== value) || selectedCategory.length === 0) {
			setselectedCategory([...selectedCategory, value])
		} else {
			setselectedCategory(selectedCategory.filter(x => x !== value))
		}
	}, [selectedCategory])
	return { itemCategory, selectedCategory, setselectedCategory }
}