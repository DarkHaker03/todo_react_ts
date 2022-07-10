import React, { FC } from "react";
import { OutputList } from "./OutputList";
import { Popup } from "./Popup";
import styles from "../css/todo.module.css"
import { IContOutPutList } from "./interfaces";

export const ContOutPutList: FC<IContOutPutList> = React.memo(({ todoLength, searchFilterTodo, redactItem, removeItem, onClick, confirmation }) => {
	console.log("rerender ContOutput")
	return (
		<div className={styles.outputList}>
			<h3> Todo list:</h3>
			<OutputList todoLength={todoLength} searchFilterTodo={searchFilterTodo} removeItem={removeItem} redactItem={redactItem} />
			{confirmation && <Popup onClick={onClick} />}
		</div>
	)
})