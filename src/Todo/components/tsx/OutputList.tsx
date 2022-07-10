import { FC } from "react";
import { ItemTodo } from "./ItemTodo";
import { IOutputList } from "./interfaces"
import { ItemTodoArray } from "./ItemTodoArray";

export const OutputList: FC<IOutputList> = ({ removeItem, searchFilterTodo, redactItem, todoLength }) => {
	return (
		<div className="outputList">
			{todoLength !== 0 ?
				searchFilterTodo.length !== 0 ?
					<ItemTodoArray removeItem={removeItem} searchFilterTodo={searchFilterTodo} redactItem={redactItem} />
					:
					<div>The search didn't yield anything !</div>
				:
				<div>You have no records !</div>
			}
		</div>
	)
}
