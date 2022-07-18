import { createEvent } from 'effector';

import { $todoList } from '../../../../global/store/todoList/todoList';

export const deleteItemOfTodoList = createEvent<number>()

$todoList
	.on(deleteItemOfTodoList, (state, x) => state.filter(i => i.id !== x))