import { useState } from "react"
export const useInputTextValue = () => {
	const [inputTextValue, setInputTextValue] = useState<string>('')
	const inputTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setInputTextValue(event.target.value)
	}
	return { inputTextValue, setInputTextValue, inputTextChange }
}