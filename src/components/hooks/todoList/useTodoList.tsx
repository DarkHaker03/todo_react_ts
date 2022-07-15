import { createEvent, createStore } from 'effector';
import { useEffect } from 'react';

import { IItemTodo } from '../../molecules/itemTodo/ItemTodo';


export interface ITodoList {
  todoList: IItemTodo[],
  setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}
export const setTodoList = createEvent<IItemTodo>()
const setTodoListStart = createEvent<IItemTodo[]>()

export const $todoList = createStore<IItemTodo[]>([])
  .on(setTodoListStart, (state, x) => x)
  .on(setTodoList, (state, x) => [...state, x])

export const useTodoList = () => {
  useEffect(() => {
    setTodoListStart([
      { id: Date.now() + 2, idx: 2, title: 'Запись третья', text: 'Текст третьей записи', category: ['Работа', 'Работа', 'Спорт', 'Здоровье', 'Спорт'] },
      { id: Date.now() + 1, idx: 1, title: 'Запись вторая', text: 'Текст второй записи', category: ['Спорт'] },
      { id: Date.now(), idx: 0, title: 'Запись первая', text: 'Текст первой записи', category: ['Здоровье'] },]
    )
  }, [])
};