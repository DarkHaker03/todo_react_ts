import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import React, { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import { useCategoriesLocalStorage } from '../../hooks/categories/useCategoriesLocalStorage';
import { useCategorieOfTodoList } from '../../hooks/categories/useCategoriesOfTodoList';
import { useInput } from '../../hooks/useInput';

import styles from './index.module.css';

const categoriesAdd = createEvent<string>()
export const caregoriesFullChange = createEvent<string[]>()

export const $categories = createStore<string[]>([])
  .on(categoriesAdd, (state, inputValue) => {
    if (!state.some(x => x === inputValue) && inputValue !== '') {
      return [...state, inputValue]
    }
    alert('This category already exists or category = " "!');
  })
  .on(caregoriesFullChange, (state, x) => x)

export const AddCategoryBlock: FC = React.memo(({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  useCategorieOfTodoList()
  useCategoriesLocalStorage()
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
});