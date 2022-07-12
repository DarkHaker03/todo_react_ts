import React, { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';

export interface IInput {
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string,
}

export const Input: FC<IInput> = React.memo(({ inputChange, value }) => {
  return (
    <input className={cx(styles.input, styles.input_width, 'input')} onChange={inputChange} value={value} />
  );
});