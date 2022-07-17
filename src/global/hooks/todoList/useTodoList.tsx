import { createEvent, createStore } from 'effector';

import { IItemTodo } from '../../../components/molecules/itemTodo/ItemTodo';

import { useTodoListLocalStorage } from './useTodoListLocalStorage';

export interface ITodoList {
  todoList: IItemTodo[],
  setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}

interface IItemTodoInUseTodoList {
  title: string,
  text: string,
  category: string[]
}

export const setTodoList = createEvent<IItemTodoInUseTodoList>()
export const setFullTodoList = createEvent<IItemTodo[]>()
export const redactTodoList = createEvent<IItemTodo>()
export const deleteItemOfTodoList = createEvent<number>()

export const $todoList = createStore<IItemTodo[]>([])
  .on(setFullTodoList, (state, x) => x)
  .on(setTodoList, (state, x) => {
    let newIdx = state[0] ? state[0].idx + 1 : 0
    return [{ id: Date.now(), idx: newIdx, ...x }, ...state]
  })
  .on(redactTodoList, (state, x) => {
    return state.map(i => i.id === x.id ? x : i)
  })
  .on(deleteItemOfTodoList, (state, x) => state.filter(i => i.id !== x))

export const useTodoList = () => {
  useTodoListLocalStorage()
  // useEffect(() => {
  //   setFullTodoList([
  //     { id: Date.now() + 2, idx: 2, title: 'Запись третья', text: 'Текст третьей записи', category: ['Работа', 'Работа', 'Спорт', 'Здоровье', 'Спорт'] },
  //     { id: Date.now() + 1, idx: 1, title: 'Запись вторая', text: 'Текст второй записи', category: ['Спорт'] },]
  //   )
  // }, [])
};