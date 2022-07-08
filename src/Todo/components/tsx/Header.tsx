import { FC } from "react";
import styles from "../css/todo.module.css"
import { IHeader } from "./interfaces";
import { Theme } from "./Theme";

export const Header: FC<IHeader> = ({ whatChange, whatChangeFunc, themeChange }) => {
	return (
		<div className={styles.header}>
			<h2 className={styles.h2}>This is your todo list XD</h2>
			<Theme whatChange={whatChange} whatChangeFunc={whatChangeFunc} colorClick={themeChange} />
		</div>
	)
}