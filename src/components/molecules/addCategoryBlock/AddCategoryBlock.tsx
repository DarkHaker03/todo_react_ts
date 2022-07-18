import { FC, useEffect } from 'react';

import './logic/index'

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import { useInput } from '../../../global/hooks/useInput';

import { categoriesLocalStorageStartFx } from './logic/categoriesLocalStorage'

import { categoriesAdd } from './logic/categories'

import styles from './index.module.css';

export const AddCategoryBlock: FC = ({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  useEffect(() => {
    categoriesLocalStorageStartFx()
  }, [])
  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input inputChange={inputOnChangeValue} value={inputValue} />
        <Button onClick={() => { categoriesAdd(inputValue); setInputValue('') }}>
          Add
        </Button>
      </div>
    </div>
  );
};