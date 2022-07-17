import { FC } from 'react';

import { ItemTodoArray } from '../itemTodoArray/ItemTodoArray';

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
