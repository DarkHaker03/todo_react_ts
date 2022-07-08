import { FC } from "react";
import { IButton } from "./interfaces";
import styles from "../css/button.module.css"
export const Button: FC<IButton> = ({ onClick, children }) => {
	return (
		<button className={[styles.button].join(' ')} onClick={onClick}> {children}</button>
	)
}