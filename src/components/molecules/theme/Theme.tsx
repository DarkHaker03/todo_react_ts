import React, { FC, useState } from "react";
import styles from "./themeColor.module.css"
import { ITheme } from "../../interfaces";
import { ElemsForChangeColor } from "../elemsForChangeColor/ElemsForChangeColor";
import { CirclsOfColor } from "../circlesOfColors/CirclsOfColor";
export const Theme: FC<ITheme> = ({ colorClick, whatChangeFunc, whatChange }) => {
	const elementsForChangeColor = ["text", "backGround", "items", "textInItems"]
	const [isTheme, setIsTheme] = useState<boolean>(false)
	console.log("rerender")
	return (
		<>
			{ isTheme === false ?
				<div className={styles.open} onClick={() => setIsTheme(true)}>Theme</div>
				:
				<div className={styles.theme} >
					<img className={styles.btnDelete} onClick={() => setIsTheme(false)} src="./img/delete.svg" alt="" />
					<div>
						<ElemsForChangeColor elementsForChangeColor={elementsForChangeColor} whatChange={whatChange} whatChangeFunc={whatChangeFunc} />
					</div>
					<div className={styles.container}>
						<div className={styles.containerItems}>
							<CirclsOfColor colorClick={colorClick} />
						</div>
					</div>
					<div className={[styles.whatItemsForChange, styles.def].join(" ")} onClick={() => whatChangeFunc("default")}>default</div>
				</div >
			}
		</>
	)
}