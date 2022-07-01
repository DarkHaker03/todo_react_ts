import React, { FC } from "react"
import { IInput } from "./interfaces"



export const Input: FC<IInput> = ({ inputChange, value }) => {
	return (

		<input className="input" onChange={inputChange} value={value} />
	)
}