import { Button } from "./Button"
import { Input } from "./Input"
import { OutputList } from "./OutputList"
import "../todo.css"
import { useTodo } from "./hooks/useTodo"
import { useInputPut } from "./hooks/useInputPut"
import { useInputSearch } from "./hooks/useInputSearch"
import { useAddItem } from "./hooks/useAddItem"
import { useRemoveItem } from "./hooks/useRemoveItem"
// import { useInputFilter } from "./hooks/useInputFilter"
import { Select } from "./Select"
import { IUseFilter } from "./interfaces"
import { useCategory } from "./hooks/useCategory"
import { useRedactItem } from "./hooks/useRedactItem"
export const Todo = () => {
	const { todo, setTodo } = useTodo()
	const { inputPutValue, inputPutChange, setInputPutValue } = useInputPut()
	const { addItem, itemCategory, selectedCategory } = useAddItem({ inputPutValue, setInputPutValue, todo, setTodo })
	const { removeItem } = useRemoveItem({ todo, setTodo })
	const { inputSearchChange, inputSearchValue, filterCategoryTodo, selectChange, selectedOption } = useInputSearch({ todo, setTodo })
	// const { selectValueChange, filterCategoryTodo, selectedValue, optionsValue } = useInputFilter({ searchFilterTodo })
	const { category, inputCategoryChange, addCategoryes, categoryes } = useCategory(todo)
	const { selectRedactItemFunc, redactItemChange, redactItem, redactItemChangeCategory, redactItemFunc } = useRedactItem({ todo, setTodo })
	// console.log(optionsValue)
	return (
		<div>
			<div>
				<h2>Add Category</h2>
				<Input inputChange={inputCategoryChange} value={category} />
				<Button onClick={addCategoryes}>
					Add
				</Button>
			</div>
			<div>
				<h2>Add item</h2>
				<Input inputChange={inputPutChange} value={inputPutValue} />
				<Select selectedValue={selectedCategory} optionsValue={categoryes} selectValueChange={itemCategory} />
				<Button onClick={addItem} >
					Add
				</Button>
			</div>
			<div>
				<h3>Redact item</h3>
				<Input inputChange={redactItemChange} value={redactItem?.text !== undefined ? redactItem.text : ''} />
				<Select selectedValue={redactItem?.category !== undefined ? redactItem.category : 'any category'} optionsValue={categoryes} selectValueChange={redactItemChangeCategory} />
				<Button onClick={redactItemFunc} >
					Redact
				</Button>
			</div>
			<div>
				<h3>Search item</h3>
				<Input inputChange={inputSearchChange} value={inputSearchValue} />
				<Select selectedValue={selectedOption} optionsValue={categoryes} selectValueChange={selectChange} />
			</div>

			<OutputList searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} />
		</div>
	)
}