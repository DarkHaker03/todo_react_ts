import { FC } from "react";
import { IButton } from "./interfaces";

export const Button: FC<IButton> = ({ onClick, children }) => {
	return (
		<button onClick={onClick}> {children}</button>
	)
}