import React, { FC } from 'react';

import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';

import styles from './index.module.css';

export interface ISearchItemBlock {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  selectedValue: string[],
  optionsValue: string[],
  selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const SearchItemBlock: FC<ISearchItemBlock> = React.memo(({ inputChange, value, selectValueChange, selectedValue, optionsValue }) => {
  return (
    <div>
      <h3>Search item</h3>
      <div className={styles.block}>
        <Input inputChange={inputChange} value={value} />
        <Select selectedValue={selectedValue} optionsValue={optionsValue} selectValueChange={selectValueChange} />
      </div>
    </div>
  );
});