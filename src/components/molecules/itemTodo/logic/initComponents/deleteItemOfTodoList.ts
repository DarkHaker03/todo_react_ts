import { deleteItemOfTodoList } from '..';
import { $todoList } from '../../../../../global/store/todoList/index';


$todoList
	.on(deleteItemOfTodoList, (state, x) => state.filter(i => i.id !== x))
