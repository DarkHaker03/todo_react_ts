import { $todoList } from '../../../../global/store/todoList';
import { redactTodoList } from './index'

$todoList
	.on(redactTodoList, (state, x) => state.map(i => i.id === x.id ? x : i))
