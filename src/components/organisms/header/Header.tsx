import React, { FC } from 'react';


import { IWhatChange, Theme } from '../../molecules/theme/Theme';

import styles from './index.module.css';

export interface IHeader extends IWhatChange {
  themeChange: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Header: FC<IHeader> = React.memo(({ whatChange, whatChangeFunc, themeChange }) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.h2}>This is your todo list XD</h2>
      <Theme whatChange={whatChange} whatChangeFunc={whatChangeFunc} colorClick={themeChange} />
    </div>
  );
});