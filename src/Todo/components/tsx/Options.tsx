import { FC } from "react"
import styles from "../css/select.module.css"

interface IOptions {
	optionsValue: string[],
	selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void,
	selectedValue: string[],
}

export const Options: FC<IOptions> = ({ optionsValue, selectValueChange, selectedValue }) => {
	return (
		<>
			{
				optionsValue.map((x, idx) => (
					<div className={["select__item", styles.item, selectedValue.some(a => a === x) && styles.itemSelected].join(" ")} key={idx} onClick={selectValueChange} >
						{selectedValue.some(a => a === x) ? x : x}
					</div>
				)
				)
			}
		</>
	)
}