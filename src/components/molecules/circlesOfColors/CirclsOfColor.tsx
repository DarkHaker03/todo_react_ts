import React, { FC } from "react";
import styles from "./index.module.css"

import { themes } from "../../store/colorsOfTheme"
interface ICirclsOfColor {
	colorClick: (event: React.MouseEvent<HTMLDivElement>) => void
}


export const CirclsOfColor: FC<ICirclsOfColor> = React.memo(({ colorClick }) => {
	console.log("rerender")
	return (
		<>
			{themes.map((x, idx) => (
				<div key={idx} className={[styles.circle, styles.margin].join(" ")} style={x} onClick={colorClick}></div>
			)
			)}
		</>
	)
})