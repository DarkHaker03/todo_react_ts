import React, { FC } from "react"
import styles from "../css/themeColor.module.css"

interface IElemsForChangeColor {
	elementsForChangeColor: string[],
	whatChange: string,
	whatChangeFunc: (value: string) => void
}
export const ElemsForChangeColor: FC<IElemsForChangeColor> = React.memo(({ elementsForChangeColor, whatChange, whatChangeFunc }) => {
	console.log("rerender")
	return (
		<>
			{elementsForChangeColor.map((x, idx) => {
				return (
					whatChange === x ?
						<div key={idx} className={styles.whatItemsForChange} onClick={() => whatChangeFunc(x)}>{x} -</div>
						:
						<div key={idx} className={styles.whatItemsForChange} onClick={() => whatChangeFunc(x)}>{x}</div>
				)
			})}
		</>
	)
})