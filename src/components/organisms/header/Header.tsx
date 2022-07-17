import React, { FC } from 'react';

import styles from './index.module.css';

export interface IHeader {
  children: JSX.Element
}

export const Header: FC<IHeader> = React.memo(({ children }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.h2}>This is your todo list XD</h2>
      {children}
    </div>
  );
});