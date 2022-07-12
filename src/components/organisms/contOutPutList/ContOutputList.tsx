import React, { FC } from 'react';

import { IOutputList, OutputList } from '../outputList/OutputList';
import { IPopup, Popup } from '../popup/Popup';


import styles from './index.module.css';

export interface IContOutPutList extends IOutputList, IPopup {
  confirmation: boolean
}

export const ContOutPutList: FC<IContOutPutList> = React.memo(({ todoLength, searchFilterTodo, redactItem, removeItem, onClick, confirmation }) => {
  console.log('rerender ContOutput');
  return (
    <div className={styles.outputList}>
      <h3> Todo list:</h3>
      <OutputList todoLength={todoLength} searchFilterTodo={searchFilterTodo} removeItem={removeItem} redactItem={redactItem} />
      {confirmation && <Popup onClick={onClick} />}
    </div>
  );
});