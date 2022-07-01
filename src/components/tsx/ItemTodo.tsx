import { FC } from "react";
import { IItemTodoWithBtns } from "./interfaces";

export const ItemTodo: FC<IItemTodoWithBtns> = ({ id, idx, text, category, removeItem, redactItem }) => {
	return (
		<div className="itemTodo">
			<span className="itemTodo__blockText">
				{idx}.
				{text}.
				<span>
					{category}
				</span>
			</span>
			<div>
				<img className="itemTodo__btnDelete" src="./static/img/delete.svg" onClick={() => removeItem(id)} />
				<img onClick={() => redactItem(id)} className="itemTodo__btnRedact" src="./static/img/redact.svg" alt="" />
			</div>
		</div>
	)
}