import React, { FC } from 'react';

import { OutputList } from '../outputList/OutputList';
import { Popup } from '../popup/Popup';

import styles from './index.module.css';

export const ContOutPutList: FC = React.memo(({ }) => {
  console.log('rerender ContOutput');
  return (
    <div className={styles.outputList}>
      <h3> Todo list:</h3>
      <OutputList />
      <Popup />
    </div>
  );
});