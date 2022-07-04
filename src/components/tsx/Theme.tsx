import React, { FC, useState } from "react";
import CSS from 'csstype';
import styles from "../css/themeColor.module.css"
import { ITheme } from "./interfaces";
export const Theme: FC<ITheme> = ({ colorClick, whatChangeFunc, whatChange }) => {
	const themes: CSS.Properties[] = [
		{ backgroundColor: "#d3d3d3" },
		{ backgroundColor: "red" },
		{ backgroundColor: "#212121" },
		{ backgroundColor: "#000" },
		{ backgroundColor: "#fff" },
		{ backgroundColor: "gold" },
		{ backgroundColor: "#ccc" },
		{ backgroundColor: "#333" },
		{ backgroundColor: "#12FF0A" },
		{ backgroundColor: "#410E67" },
		{ backgroundColor: "#0510E1" },
		{ backgroundColor: "#2CF7F4" },
	]
	const elementsForChangeColor = ["text", "backGround", "items", "textInItems"]
	const [isTheme, setIsTheme] = useState<boolean>(false)
	return (
		<React.Fragment>
			{ isTheme === false ?
				<div className={styles.open} onClick={() => setIsTheme(true)}>Theme</div>
				:
				<div className={styles.theme} >
					<img className={styles.btnDelete} onClick={() => setIsTheme(false)} src="./img/delete.svg" alt="" />
					<div>
						{elementsForChangeColor.map((x, idx) => {
							return (
								whatChange === x ?
									<div key={idx} className={styles.whatItemsForChange} onClick={whatChangeFunc}>{x} -</div>
									:
									<div key={idx} className={styles.whatItemsForChange} onClick={whatChangeFunc}>{x}</div>
							)
						})}
					</div>
					<div className={styles.container}>
						<div className={styles.containerItems}>
							{themes.map((x, idx) => {
								return (
									<div key={idx} className={[styles.circle, styles.margin].join(" ")} style={x} onClick={colorClick}></div>
								)
							})}
						</div>
					</div>
					<div className={[styles.whatItemsForChange, styles.def].join(" ")} onClick={whatChangeFunc}>default</div>
				</div >
			}
		</React.Fragment>

	)
}