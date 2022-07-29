import React, { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';

export interface IInput {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string,
}

export const Input: FC<IInput> = ({ onChange, value }) => {
  console.log("input")
  return (
    <input className={cx(styles.input, styles.input_width, 'input')} onChange={onChange} value={value} />
  );
};