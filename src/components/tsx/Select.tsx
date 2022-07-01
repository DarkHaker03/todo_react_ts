import { FC } from "react";
import { ISelect } from "./interfaces";
import select from "../css/select.module.css"


export const Select: FC<ISelect> = ({ optionsValue, selectValueChange, selectedValue }) => {

	return (
		<select className={[select.select].join(' ')} value={selectedValue} onChange={selectValueChange}>
			{optionsValue.map((x, idx) =>
				<option key={idx} value={x}>{x}</option>
			)}
		</select>
	)
}