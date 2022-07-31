import { useStore } from 'effector-react';
import { FC } from 'react';

import { $todoList } from '../../../global/store/todoList';
import { $filteredTodoList } from '../../molecules/searchItemBlock/logic';

import { ItemTodoArray } from '../itemTodoArray/ItemTodoArray';

export const OutputList: FC = () => {

  const todoListLength = useStore($todoList).length;
  const filteredTodoListLength = useStore($filteredTodoList).length;

  console.log("rerender OutputList")
  return (
    <div className="outputList">
      { todoListLength !== 0 ?
        filteredTodoListLength !== 0 ?
          <ItemTodoArray />
          :
          <div>The search didn't yield anything !</div>
        :
        <div>You have no records !</div>
      }
    </div>
  );
};
