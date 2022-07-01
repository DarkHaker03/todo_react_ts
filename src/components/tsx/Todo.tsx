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
import { Popup } from "./Popup"
export const Todo = () => {
	const { todo, setTodo } = useTodo()
	const { inputPutValue, inputPutChange, setInputPutValue } = useInputPut()
	const { addItem, itemCategory, selectedCategory } = useAddItem({ inputPutValue, setInputPutValue, todo, setTodo })
	const { removeItem, removeItemConfirmation, confirmation } = useRemoveItem({ todo, setTodo })
	const { inputSearchChange, inputSearchValue, filterCategoryTodo, selectChange, selectedOption } = useInputSearch({ todo, setTodo })
	const { category, inputCategoryChange, addCategoryes, categories } = useCategory(todo)
	const { selectRedactItemFunc, redactItemChange, redactItem, redactItemChangeCategory, redactItemFunc } = useRedactItem({ todo, setTodo })
	return (
		<div className="wrapper">
			<div className="header">
				<h2>This is your todo list XD</h2>
			</div>
			<div className="main p-5 has-background-black-bis">
				<div className="columns is-multiline " >
					<div className="column is-8">
						<h3>Add Category</h3>
						<div className="is-flex flex-direction-column-mob">
							<Input inputChange={inputCategoryChange} value={category} />
							<Button styles="button" onClick={addCategoryes}>
								Add
						</Button>
						</div>
					</div>
					<div className="column is-8">
						<h3>Add item</h3>
						<div className="is-flex flex-direction-column-mob">
							<Input inputChange={inputPutChange} value={inputPutValue} />
							<Select selectedValue={selectedCategory} optionsValue={categories} selectValueChange={itemCategory} />
							<Button styles="button" onClick={addItem} >
								Add
							</Button>
						</div>
					</div>
					<div className="column is-8">
						<h3>Redact item</h3>
						<div className="is-flex flex-direction-column-mob">
							<Input inputChange={redactItemChange} value={redactItem?.text !== undefined ? redactItem.text : ''} />
							<Select selectedValue={redactItem?.category !== undefined ? redactItem.category : 'any category'} optionsValue={categories} selectValueChange={redactItemChangeCategory} />
							<Button styles="button" onClick={redactItemFunc} >
								Redact
						</Button>
						</div>
					</div>
					<div className="column is-8">
						<h3>Search item</h3>
						<div className="is-flex flex-direction-column-mob">
							<Input inputChange={inputSearchChange} value={inputSearchValue} />
							<Select selectedValue={selectedOption} optionsValue={categories} selectValueChange={selectChange} />
						</div>
					</div>
					<div className="column is-full">
						<OutputList searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} />
						{confirmation && <Popup onClick={removeItemConfirmation} />}
					</div>
				</div>
			</div>
		</div>
	)
}