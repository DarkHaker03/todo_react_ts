import { useStore } from 'effector-react';

import { FC } from 'react';

import { $filterData, filterTodoList } from '../../hooks/todoList/useFilterTodoList';
import { $todoList } from '../../hooks/todoList/useTodoList';

import { ItemTodo } from '../../molecules/itemTodo/ItemTodo';

export const ItemTodoArray: FC = () => {
  useStore($filterData)
  useStore($todoList)
  return (
    <>
      {filterTodoList().map((x, idx) => (
        <ItemTodo key={x.id} {...x} idx={filterTodoList().length - idx} />
      ),
      )}
    </>
  );
};