import { FC, useEffect } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

// import { useCategoriesLocalStorage } from '../../../global/hooks/categories/useCategoriesLocalStorage';
import { useCategorieOfTodoList } from '../../../global/hooks/categories/useCategoriesOfTodoList';
import { useInput } from '../../../global/hooks/useInput';

import { categoriesLocalStorageStartFx } from '../../../global/hooks/categories/useCategoriesLocalStorage'

import { categoriesAdd } from './logic/index'

import styles from './index.module.css';

export const AddCategoryBlock: FC = ({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  useEffect(() => {
    categoriesLocalStorageStartFx()
  }, [])
  // useCategorieOfTodoList()
  // useCategoriesLocalStorage()
  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input inputChange={e => inputOnChangeValue(e)} value={inputValue} />
        <Button onClick={() => { categoriesAdd(inputValue); setInputValue('') }}>
          Add
        </Button>
      </div>
    </div>
  );
};