import React, { FC } from 'react';

import styles from './index.module.css';

export interface IButton {
  onClick: () => void,
  children: React.ReactNode,
}

export interface IremoveBtn {
  removeItem: (id: number) => void
}

export interface IRedactBtn {
  redactItem: (id: number) => void
}


export const Button: FC<IButton> = React.memo(({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}> {children}</button>
  );
});