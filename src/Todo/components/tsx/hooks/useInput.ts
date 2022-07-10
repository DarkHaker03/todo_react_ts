import React, { useCallback, useState } from "react"
import { IInputMas } from "../interfaces"
export const useInput = (): IInputMas["a"] => {
	const [value, setValue] = useState<string>('')
	const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
		const value: string = e.target.value
		setValue(value)
	}, [])
	console.log("rerender", value)
	return [value, setValue, onChange]
}