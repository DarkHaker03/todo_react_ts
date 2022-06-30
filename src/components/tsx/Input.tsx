import React, { FC } from "react"
import { IInputPut } from "./interfaces"



export const Input: FC<IInputPut> = ({ inputChange, value }) => {
	return (

		<input onChange={inputChange} value={value} />
	)
}