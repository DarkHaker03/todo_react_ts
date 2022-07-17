import { useStore } from 'effector-react';

import { FC } from 'react';

import { $filteredTodoList } from '../../molecules/searchItemBlock/logic';

import { ItemTodo } from '../../molecules/itemTodo/ItemTodo';

export const ItemTodoArray: FC = () => {
  const filteredTodoList = useStore($filteredTodoList)
  // useStore($filterData)
  // useStore($todoList)
  return (
    <>
      {filteredTodoList.map((x, idx) => (
        <ItemTodo key={x.id} {...x} idx={filteredTodoList.length - idx} />
      ),
      )}
    </>
  );
};