import { FC } from "react";
import { ISelect } from "./interfaces";

export const Select: FC<ISelect> = ({ optionsValue, selectValueChange, selectedValue }) => {

	return (
		<select className="select mx-2 margin-mob" value={selectedValue} onChange={selectValueChange}>
			{optionsValue.map((x, idx) =>
				<option key={idx} value={x}>{x}</option>
			)}
		</select>
	)
}