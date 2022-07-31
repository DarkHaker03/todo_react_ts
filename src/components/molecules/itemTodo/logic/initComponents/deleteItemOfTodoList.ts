import { deleteItemOfTodoList } from '..';
import { $todoList } from '../../../../../global/store/todoList/index';


$todoList
	.on(deleteItemOfTodoList, (state, idItemForDelete) => state.filter(item => item.id !== idItemForDelete))

