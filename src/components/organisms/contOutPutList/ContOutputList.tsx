import { createStore, createEvent } from 'effector';
import { useStore } from 'effector-react';
import React, { FC } from 'react';

import { OutputList } from '../outputList/OutputList';
import { Popup } from '../popup/Popup';


import styles from './index.module.css';

export const setConfirm = createEvent<boolean>()

const $confirm = createStore<boolean>(false)
  .on(setConfirm, (_, x) => x)

export const ContOutPutList: FC = React.memo(({ }) => {
  const confirm = useStore($confirm)
  console.log('rerender ContOutput');
  return (
    <div className={styles.outputList}>
      <h3> Todo list:</h3>
      <OutputList />
      {confirm && <Popup />}
    </div>
  );
});