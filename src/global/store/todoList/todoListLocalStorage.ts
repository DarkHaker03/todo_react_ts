import { createEffect, forward } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

import { $todoList, setFullTodoList } from './todoList'

const todoList = $todoList.getState()
if (localStorage.getItem('todoList') === null) {
	localStorage.setItem('todoList', JSON.stringify(todoList));
} else {
	setFullTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
}

const todoListLocalStorageUpdateFx = createEffect((state: IItemTodo[]) => {
	localStorage.setItem('todoList', JSON.stringify(state));
})
forward({
	from: $todoList,
	to: todoListLocalStorageUpdateFx
})
