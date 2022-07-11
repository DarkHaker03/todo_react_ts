import React, { FC } from "react";
import { IButton } from "../../interfaces"
import styles from "./button.module.css"
export const Button: FC<IButton> = React.memo(({ onClick, children }) => {
	return (
		<button className={[styles.button].join(' ')} onClick={onClick}> {children}</button>
	)
})