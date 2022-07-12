import { FC } from 'react';


import { ItemTodoArray } from '../itemTodoArray/ItemTodoArray';

import { IRedactBtn, IremoveBtn } from '../../atoms/button/Button';
import { IItemTodo } from '../../molecules/itemTodo/ItemTodo'

export interface IOutputList extends IremoveBtn, IRedactBtn {
  searchFilterTodo: IItemTodo[],
  todoLength: number
}

export const OutputList: FC<IOutputList> = ({ removeItem, searchFilterTodo, redactItem, todoLength }) => {
  return (
    <div className="outputList">
      {todoLength !== 0 ?
        searchFilterTodo.length !== 0 ?
          <ItemTodoArray removeItem={removeItem} searchFilterTodo={searchFilterTodo} redactItem={redactItem} />
          :
          <div>The search didn't yield anything !</div>
        :
        <div>You have no records !</div>
      }
    </div>
  );
};
