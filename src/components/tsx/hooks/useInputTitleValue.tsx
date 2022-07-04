import { useState } from "react"
export const useInputTitleValue = () => {
	const [inputTitleValue, setInputPutValue] = useState<string>('')
	const inputPutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputPutValue(event.target.value)
	}
	return { inputTitleValue, setInputPutValue, inputPutChange }
}