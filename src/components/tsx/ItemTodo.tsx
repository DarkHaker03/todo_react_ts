import { FC } from "react";
import { IItemTodoWithBtns } from "./interfaces";

export const ItemTodo: FC<IItemTodoWithBtns> = ({ id, idx, text, category, removeItem, redactItem }) => {
	return (
		<div className="itemTodo">
			{idx}. {text}. {category}<img className="itemTodo__btnDelete" src="../../img/delete.svg" onClick={() => removeItem(id)} /> <img onClick={() => redactItem(id)} className="itemTodo__btnRedact" src="../../img/redact.svg" alt="" />
		</div>
	)
}