import { useEffect, useState } from 'react';

import { IItemTodo } from '../molecules/itemTodo/ItemTodo';


export interface ITodoList {
  todoList: IItemTodo[],
  setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}

export const useTodoList = (): ITodoList => {
  const [todoList, setTodoList] = useState<IItemTodo[]>([
    { id: Date.now() + 2, idx: 2, title: 'Запись третья', text: 'Текст третьей записи', category: ['Работа', 'Работа', 'Спорт', 'Здоровье', 'Спорт'] },
    { id: Date.now() + 1, idx: 1, title: 'Запись вторая', text: 'Текст второй записи', category: ['Спорт'] },
    { id: Date.now(), idx: 0, title: 'Запись первая', text: 'Текст первой записи', category: ['Здоровье'] },
  ]);
  useEffect(() => {
    console.log(localStorage.getItem('todoList'));
    if (localStorage.getItem('todoList') === null) {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    } else {
      setTodoList(JSON.parse(localStorage.getItem('todoList') || ''));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);
  return { todoList, setTodoList };
};