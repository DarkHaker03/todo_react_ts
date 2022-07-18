import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { createEffect, forward } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

import { $todoList, setFullTodoList } from './useTodoList'




export const todoListLocalStorageStartFx = createEffect((state = $todoList) => {
	if (localStorage.getItem('todoList') === null) {
		localStorage.setItem('todoList', JSON.stringify(state));
	} else {
		setFullTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
	}
})

const todoListLocalStorageUpdateFx = createEffect((state: IItemTodo[]) => {
	localStorage.setItem('todoList', JSON.stringify(state));
})
forward({
	from: $todoList,
	to: todoListLocalStorageUpdateFx
})


// export const useTodoListLocalStorage = () => {
// 	const todoList = useStore($todoList)
// 	useEffect(() => {
// 		if (localStorage.getItem('todoList') === null) {
// 			localStorage.setItem('todoList', JSON.stringify(todoList));
// 		} else {
// 			setFullTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
// 		}
// 	}, []);
// 	useEffect(() => {
// 		localStorage.setItem('todoList', JSON.stringify(todoList));
// 	}, [todoList]);
// }