import { forward } from 'effector';
import { todoListLocalStorageUpdateFx } from '../index';

import { $todoList, setFullTodoList } from '../index'


const todoList = $todoList.getState()

if (localStorage.getItem('todoList') === null) {
	localStorage.setItem('todoList', JSON.stringify(todoList));
} else {
	setFullTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
}


forward({
	from: $todoList,
	to: todoListLocalStorageUpdateFx
})
