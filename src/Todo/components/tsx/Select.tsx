import React, { FC, useState } from "react";
import { ISelect } from "./interfaces";
import styles from "../css/select.module.css"


export const Select: FC<ISelect> = ({ optionsValue, selectValueChange, selectedValue }) => {
	const [categoriesIsOpen, setcategoriesIsOpen] = useState(false)
	// console.log(selectedValue)
	return (
		// <select className={[select.select].join(' ')} value={selectedValue} onChange={selectValueChange}>
		// 	{optionsValue.map((x, idx) =>
		// 		<option key={idx} value={x}>{x}</option>
		// 	)}
		// </select>
		<React.Fragment>
			{categoriesIsOpen ?
				<div className={styles.close} onClick={() => setcategoriesIsOpen(false)}>
				</div>
				: ""
			}
			<div className={["m_select"].join(' ')} onClick={() => setcategoriesIsOpen(true)}>
				{categoriesIsOpen ?
					<div className={styles.container} onClick={e => e.stopPropagation()}>
						{optionsValue.map((x, idx) =>
							<div className={["select__item", styles.item, selectedValue.some(a => a === x) && styles.itemSelected].join(" ")} key={idx} onClick={selectValueChange} >
								{selectedValue.some(a => a === x) ? x : x}
							</div>
						)}
					</div>
					:
					"categories"
				}
			</div>
		</React.Fragment >
	)
}