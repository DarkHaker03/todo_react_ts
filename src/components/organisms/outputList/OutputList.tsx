import { FC } from 'react';


import { ItemTodoArray } from '../itemTodoArray/ItemTodoArray';

import { IRedactBtn, IremoveBtn } from '../../atoms/button/Button';
import { IItemTodo } from '../../molecules/itemTodo/ItemTodo'

export const OutputList: FC = ({ }) => {
  return (
    <div className="outputList">
      { true ?
        true ?
          <ItemTodoArray />
          :
          <div>The search didn't yield anything !</div>
        :
        <div>You have no records !</div>
      }
    </div>
  );
};
