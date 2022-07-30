import { setTodoList } from "."
import { $todoList } from "../../../../global/store/todoList/index"

$todoList
	.on(setTodoList, (state, newItem) => {
		let newIdx = state[0] ? state[0].idx + 1 : 0
		return [{ id: Date.now(), idx: newIdx, ...newItem }, ...state]
	})