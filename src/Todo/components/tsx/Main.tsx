import React, { FC, useMemo } from "react";
import { IChildrens, IMain } from "./interfaces";
import styles from "../css/todo.module.css"
import { useTodoList } from "./hooks/useTodoList";
import { useAddItem } from "./hooks/useAddItem";
import { useRemoveItem } from "./hooks/useRemoveItem";
import { useCategory } from "./hooks/useCategory";
import { useInputSearch } from "./hooks/useInputSearch";
import { useRedactItem } from "./hooks/useRedactItem";
import { ContOutPutList } from "./ContOutputList";
import { Fields } from "./Fileds";
import { useInput } from "./hooks/useInput";
import { childrensArrayFunc } from "./store/mainChildrens";


export const Main: FC<IMain> = React.memo(({ }) => {
	console.log("rerender Main")
	// in one component
	const { todoList, setTodoList } = useTodoList()
	const [inputTitleValue, setInputTitleValue, inputTitleChange] = useInput()
	const [inputTextValue, setInputTextValue, inputTextChange] = useInput()
	const { category, inputCategoryChange, addCategories, categories } = useCategory(todoList)
	const { addItem, itemCategory, selectedCategory } = useAddItem({ inputTitleValue, inputTextValue, setInputTitleValue, setInputTextValue, todoList, setTodoList })
	// stay
	const { removeItem, removeItemConfirmation, confirmation } = useRemoveItem({ todoList, setTodoList })
	// stay and set in provider
	const { selectRedactItemFunc, redactItemChange, redactItem, itemCategoryRedact, redactItemFunc, redactTextChange, cleanRedactItems } = useRedactItem({ todoList, setTodoList })
	const { inputSearchChange, inputSearchValue, filterCategoryTodo, selectChange, selectedOption } = useInputSearch({ todoList, setTodoList })
	const childrensArray = childrensArrayFunc({ itemCategoryRedact, selectChange, selectedOption, inputSearchValue, inputSearchChange, redactTextChange, redactItemFunc, cleanRedactItems, redactItem, redactItemChange, inputTextValue, inputCategoryChange, category, addCategories, inputTitleValue, inputTitleChange, addItem, selectedCategory, categories, itemCategory, inputTextChange })
	const fields = useMemo(() => childrensArray.map((x, idx) => <Fields key={idx} childrens={x} />), [selectedOption, inputSearchValue, redactItem, inputTextValue, category, inputTitleValue, selectedCategory, categories])
	return (
		//provider
		<div className={[styles.main, "p-5 "].join(" ")}>
			<div className={styles.container} >
				<div>Info...</div>
				{/*  one component */}
				{fields}
				{/* one component */}
				<ContOutPutList todoLength={todoList.length} searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} confirmation={confirmation} onClick={removeItemConfirmation} />
			</div>
		</div>
		//provider
	)
})