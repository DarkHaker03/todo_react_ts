import { createEvent, createStore } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

import { useTodoListLocalStorage } from './useTodoListLocalStorage';

export interface ITodoList {
  todoList: IItemTodo[],
  setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}

export const setFullTodoList = createEvent<IItemTodo[]>()

export const $todoList = createStore<IItemTodo[]>([])
  .on(setFullTodoList, (state, x) => x)

export const useTodoList = () => {
  useTodoListLocalStorage()
  // useEffect(() => {
  //   setFullTodoList([
  //     { id: Date.now() + 2, idx: 2, title: 'Запись третья', text: 'Текст третьей записи', category: ['Работа', 'Работа', 'Спорт', 'Здоровье', 'Спорт'] },
  //     { id: Date.now() + 1, idx: 1, title: 'Запись вторая', text: 'Текст второй записи', category: ['Спорт'] },]
  //   )
  // }, [])
};