import { useStore } from 'effector-react'

import { $selectedItem, IItemTodo } from '../../molecules/itemTodo/ItemTodo';

import { $todoList } from './useTodoList'

// export const useTodoListReturnItem = (id: number) => {
// 	const seletedAllItem: IItemTodo = useStore($todoList).filter(x => x.id === id ? x : null)[0]
// 	return seletedAllItem;
// }
// const selectedItem = $selectedItem.getState()
// const todoList = $todoList.getState()
// export const seletedAllItem: IItemTodo = todoList.filter(x => x.id === selectedItem ? x : null)[0]