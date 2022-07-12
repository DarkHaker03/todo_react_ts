import { FC } from 'react';


import { IItemTodo, ItemTodo } from '../../molecules/itemTodo/ItemTodo';

export interface IItemTodoArray {
  searchFilterTodo: IItemTodo[],
  removeItem: (id: number) => void,
  redactItem: (id: number) => void,
}

export const ItemTodoArray: FC<IItemTodoArray> = ({ removeItem, searchFilterTodo, redactItem }) => {
  return (
    <>
      {searchFilterTodo.map((x, idx) => (
        <ItemTodo key={x.id} {...x} redactItem={redactItem} removeItem={removeItem} idx={searchFilterTodo.length - idx} />
      ),
      )}
    </>
  );
};