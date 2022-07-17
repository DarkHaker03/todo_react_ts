import React, { FC } from 'react';

import styles from './index.module.css';

export interface IButton {
  onClick: () => void,
  children: React.ReactNode,
}

export const Button: FC<IButton> = React.memo(({ onClick, children }) => {
  return (
    <button className={styles.button} onClick={onClick}> {children}</button>
  );
});