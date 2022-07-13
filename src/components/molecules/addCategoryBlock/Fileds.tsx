import React, { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import styles from './index.module.css';

export interface IChildrens {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
  onClick: () => void,
}

export const Fields: FC<IChildrens> = React.memo(({ inputChange, value, onClick }) => {
  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input inputChange={inputChange} value={value} />
        <Button onClick={onClick}>
          Add
        </Button>
      </div>
    </div>
  );
});