import React, { FC } from 'react';
import { Theme } from '../../molecules/theme/Theme';

import styles from './index.module.css';

export const Header: FC = React.memo(() => {

  console.log("rerender Header");

  return (
    <div className={styles.header}>
      <h2 className={styles.h2}>This is your todo list XD</h2>
      <Theme />
    </div>
  );
});