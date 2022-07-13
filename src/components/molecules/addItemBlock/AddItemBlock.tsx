import React, { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';

import styles from './index.module.css';

export interface IAddItemBlock {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
  onClick: () => void,
  selectedValue: string[],
  optionsValue: string[],
  selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void
  textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  textAreaValue: string,
}

export const AddItemBlock: FC<IAddItemBlock> = React.memo(({ inputChange, value, selectedValue, optionsValue, selectValueChange, onClick, textAreaChange, textAreaValue }) => {
  return (
    <div>
      <h3>Add item</h3>
      <div className={styles.block}>
        <Input inputChange={inputChange} value={value} />
        <Select selectedValue={selectedValue} optionsValue={optionsValue} selectValueChange={selectValueChange} />
        <Button onClick={onClick}>
          Add
        </Button>
      </div>
      <TextArea textAreaChange={textAreaChange} value={textAreaValue} />
    </div>
  );
});