import React, { FC } from "react"
import { IInput } from "../../interfaces"
import input from "./input.module.css"


export const Input: FC<IInput> = React.memo(({ inputChange, value }) => {
	return (
		<input className={[input.input, input.input_width, "input"].join(' ')} onChange={inputChange} value={value} />
	)
})