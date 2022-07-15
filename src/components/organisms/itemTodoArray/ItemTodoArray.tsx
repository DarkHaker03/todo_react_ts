import { useStore } from 'effector-react';

import { FC } from 'react';

import { $todoList } from '../../hooks/todoList/useTodoList';

import { IItemTodo, ItemTodo } from '../../molecules/itemTodo/ItemTodo';

// export interface IItemTodoArray {
//   searchFilterTodo: IItemTodo[],
//   removeItem: (id: number) => void,
//   redactItem: (id: number) => void,
// }

export const ItemTodoArray: FC = () => {
  const todoList = useStore($todoList)
  console.log(todoList, 'changed')
  return (
    <>
      {todoList.map((x, idx) => (
        <ItemTodo key={x.id} {...x} idx={todoList.length - idx} />
        // redactItem={ } removeItem={ } 
      ),
      )}
    </>
  );
};