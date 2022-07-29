import { FC } from 'react';

import './logic/index'

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import { useInput } from '../../../global/hooks/useInput';

import { categoriesAdd } from './logic/categories'

import styles from './index.module.css';

export const AddCategoryBlock: FC = () => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={inputValue} />
        <Button onClick={() => { categoriesAdd(inputValue); setInputValue('') }}>
          Add
        </Button>
      </div>
    </div>
  );
};