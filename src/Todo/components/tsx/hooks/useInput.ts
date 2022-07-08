import React, { useState } from "react"
import { IInputMas } from "../interfaces"
export const useInput = (): IInputMas["a"] => {
	const [value, setValue] = useState<string>('')
	const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const value: string = e.target.value
		setValue(value)
	}
	return [value, setValue, onChange]
}