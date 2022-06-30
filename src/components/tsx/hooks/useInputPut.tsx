import { useState } from "react"
export const useInputPut = () => {
	const [inputPutValue, setInputPutValue] = useState<string>('')
	const inputPutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputPutValue(event.target.value)
	}
	return { inputPutValue, setInputPutValue, inputPutChange }
}