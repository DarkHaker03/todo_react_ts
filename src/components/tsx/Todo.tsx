import { Button } from "./Button"
import { Input } from "./Input"
import { OutputList } from "./OutputList"
import "../todo.css"
import { useTodo } from "./hooks/useTodo"
import { useInputTitleValue } from "./hooks/useInputTitleValue"
import { useInputSearch } from "./hooks/useInputSearch"
import { useAddItem } from "./hooks/useAddItem"
import { useRemoveItem } from "./hooks/useRemoveItem"
import { Select } from "./Select"
import { useCategory } from "./hooks/useCategory"
import { useRedactItem } from "./hooks/useRedactItem"
import { Popup } from "./Popup"
import styles from "../css/todo.module.css"
import { useTheme } from "./hooks/useTheme"
import { Theme } from "./Theme"
import CSS from "csstype"
import { useInputTextValue } from "./hooks/useInputTextValue"
import { TextArea } from "./TextArea"
export const Todo = () => {
	const { todo, setTodo } = useTodo()
	const { inputTitleValue, inputPutChange, setInputPutValue } = useInputTitleValue()
	const { inputTextValue, inputTextChange, setInputTextValue } = useInputTextValue()
	const { addItem, itemCategory, selectedCategory } = useAddItem({ inputTitleValue, inputTextValue, setInputPutValue, setInputTextValue, todo, setTodo })
	const { removeItem, removeItemConfirmation, confirmation } = useRemoveItem({ todo, setTodo })
	const { inputSearchChange, inputSearchValue, filterCategoryTodo, selectChange, selectedOption } = useInputSearch({ todo, setTodo })
	const { category, inputCategoryChange, addCategoryes, categories } = useCategory(todo)
	const { selectRedactItemFunc, redactItemChange, redactItem, itemCategoryRedact, redactItemFunc, redactTextChange, cleanRedactItems } = useRedactItem({ todo, setTodo })
	const { theme, itemsStyle, themeChange, whatChangeFunc, whatChange } = useTheme();
	return (
		<div className={[styles.wrapper].join(" ")} style={theme}>
			<style>
				{itemsStyle.background}
				{itemsStyle.color}
			</style>
			<div className={styles.header}>
				<h2 className={styles.h2}>This is your todo list XD</h2>
				<Theme whatChange={whatChange} whatChangeFunc={whatChangeFunc} colorClick={themeChange} />
			</div>
			<div className={[styles.main, "p-5 "].join(" ")}>
				<div className={styles.container} >
					<div>
						<h3>Add Category</h3>
						<div className={styles.block}>
							<Input inputChange={inputCategoryChange} value={category} />
							<Button onClick={addCategoryes}>
								Add
						</Button>
						</div>
					</div>
					<div >
						<h3>Add item</h3>
						<div className={styles.block}>
							<Input inputChange={inputPutChange} value={inputTitleValue} />
							<Select selectedValue={selectedCategory} optionsValue={categories} selectValueChange={itemCategory} />
							<Button onClick={addItem} >
								Add
							</Button>
						</div>
						<TextArea textAreaChange={inputTextChange} value={inputTextValue} />
					</div>
					<div>
						<h3>Redact item</h3>
						<div className={styles.block}>
							<Input inputChange={redactItemChange} value={redactItem?.title !== undefined ? redactItem.title : ''} />
							<Select selectedValue={redactItem?.category !== undefined ? redactItem.category : ['any category']} optionsValue={categories} selectValueChange={itemCategoryRedact} />
							<Button onClick={cleanRedactItems} >
								Clean
							</Button>
							<Button onClick={redactItemFunc} >
								Redact
							</Button>
						</div>
						<TextArea textAreaChange={redactTextChange} value={redactItem?.text !== undefined ? redactItem.text : ''} />
					</div>
					<div >
						<h3>Search item</h3>
						<div className={styles.block}>
							<Input inputChange={inputSearchChange} value={inputSearchValue} />
							<Select selectedValue={selectedOption} optionsValue={categories} selectValueChange={selectChange} />
						</div>
					</div>
					<div className={styles.outputList}>
						<h3> Todo list:</h3>
						<OutputList todoLength={todo.length} searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} />
						{confirmation && <Popup onClick={removeItemConfirmation} />}
					</div>
				</div>
			</div>
		</div>
	)
}