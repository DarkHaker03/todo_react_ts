import { FC } from "react";
import { ItemTodo } from "./ItemTodo";
import { IOutputList } from "./interfaces"

export const OutputList: FC<IOutputList> = ({ removeItem, searchFilterTodo, redactItem, todoLength }) => {
	// console.log(searchFilterTodo)
	return (
		<div className="outputList">
			{todoLength !== 0 ?
				searchFilterTodo.length !== 0 ?
					searchFilterTodo.map((x, idx) => (
						<ItemTodo key={x.id} {...x} redactItem={redactItem} removeItem={removeItem} idx={searchFilterTodo.length - idx} />
					)
					)
					:
					<div>The search didn't yield anything !</div>
				:
				<div>You have no records !</div>
			}
		</div>
	)
}
