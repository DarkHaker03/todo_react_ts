import { useStore } from "effector-react";
import { useEffect } from "react";

import { $todoList, setTodoList } from './useTodoList'

export const useTodoListLocalStorage = () => {
	const todoList = useStore($todoList)
	useEffect(() => {
		if (localStorage.getItem('todoList') === null) {
			localStorage.setItem('todoList', JSON.stringify(todoList));
		} else {
			setTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('todoList', JSON.stringify(todoList));
	}, [todoList]);
}