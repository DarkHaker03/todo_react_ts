import { FC } from "react";
import { IButton } from "./interfaces";

export const Button: FC<IButton> = ({ onClick, children, styles }) => {
	return (
		<button className={[styles, "mx-2", "margin-mob"].join(' ')} onClick={onClick}> {children}</button>
	)
}