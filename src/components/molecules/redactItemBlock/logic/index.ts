import { createEvent } from "effector";

import { $todoList } from "../../../../global/hooks/todoList/todoList";

import { IItemTodo } from "../../itemTodo/ItemTodo";

export const redactTodoList = createEvent<IItemTodo>()


$todoList
	.on(redactTodoList, (state, x) => state.map(i => i.id === x.id ? x : i))
