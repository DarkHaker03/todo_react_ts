import { FC } from "react";
import { IItemTodoArray } from "../../interfaces";
import { ItemTodo } from "../../molecules/itemTodo/ItemTodo";


export const ItemTodoArray: FC<IItemTodoArray> = ({ removeItem, searchFilterTodo, redactItem }) => {
	return (
		<>
			{searchFilterTodo.map((x, idx) => (
				<ItemTodo key={x.id} {...x} redactItem={redactItem} removeItem={removeItem} idx={searchFilterTodo.length - idx} />
			)
			)}
		</>
	)
}