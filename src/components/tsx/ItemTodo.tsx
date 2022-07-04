import { FC } from "react";
import { IItemTodoWithBtns } from "./interfaces";
import styles from "../css/itemTodo.module.css"

export const ItemTodo: FC<IItemTodoWithBtns> = ({ id, idx, title, text, category, removeItem, redactItem }) => {
	return (
		<div className={styles.itemTodo}>
			<div className={styles.itemTodo__blockText}>
				<div> Number {idx}.</div>
				<div> Title {title}.</div>
				<div> Text: {text}.</div>
				<div>
					Category: {category}
				</div>
			</div>
			<div>
				<img className={styles.itemTodo__btnDelete} src="./img/delete.svg" onClick={() => removeItem(id)} />
				<img onClick={() => redactItem(id)} className={styles.itemTodo__btnRedact} src="./img/redact.svg" alt="" />
			</div>
		</div>
	)
}