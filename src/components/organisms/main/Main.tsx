import React, { FC } from 'react';

import cx from 'clsx';

import { AddCategoryBlock } from '../../molecules/addCategoryBlock/AddCategoryBlock'
import { AddItemBlock } from '../../molecules/addItemBlock/AddItemBlock'
import { RedactItemBlock } from '../../molecules/redactItemBlock/RedactItemBlock'
import { SearchItemBlock } from '../../molecules/searchItemBlock/SearchItemBlock'

import { useTodoList } from '../../hooks/todoList/useTodoList';
import { ContOutPutList } from '../contOutPutList/ContOutputList';

import styles from './index.module.css';

export const Main: FC = React.memo(({ }) => {
  console.log('rerender Main');
  useTodoList()
  return (
    <div className={cx(styles.main, 'p-5')}>
      <div className={styles.container} >
        <div>Info...</div>
        <AddCategoryBlock />
        <AddItemBlock />
        <RedactItemBlock />
        <SearchItemBlock />
        <ContOutPutList />
      </div>
    </div>
  );
});