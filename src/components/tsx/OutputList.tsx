import { FC } from "react";
import { ItemTodo } from "./ItemTodo";
import { IOutputList } from "./interfaces"

export const OutputList: FC<IOutputList> = ({ removeItem, searchFilterTodo, redactItem }) => {
	return (
		<div className="outputList">
			{
				searchFilterTodo.map((x, idx) => (
					<ItemTodo key={x.id} {...x} redactItem={redactItem} removeItem={removeItem} idx={searchFilterTodo.length - idx} />
				)
				)
			}
		</div>
	)
}
