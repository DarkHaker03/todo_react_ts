import { createEvent, createStore } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

export interface ITodoList {
  todoList: IItemTodo[],
  setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}

export const setFullTodoList = createEvent<IItemTodo[]>()

export const $todoList = createStore<IItemTodo[]>([])
  .on(setFullTodoList, (state, x) => x)