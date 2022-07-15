import { createEvent, createStore } from 'effector';
import { useStore } from 'effector-react';

import React, { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import { useCategoriesLocalStorage } from '../../hooks/categories/useCategoriesLocalStorage';
import { useCategorieOfTodoList } from '../../hooks/categories/useCategoriesOfTodoList';

import styles from './index.module.css';

const categorieOnChange = createEvent<string>()
const categoriesAdd = createEvent<string>()
export const caregoriesFullChange = createEvent<string[]>()

const $categorieInputValue = createStore<string>('')
  .on(categorieOnChange, (state, x) => x)

export const $categories = createStore<string[]>([])
  .on(categoriesAdd, (state, inputValue) => {
    if (!state.some(x => x === inputValue) && inputValue !== '') {
      return [...state, inputValue]
    }
    alert('This category already exists or category = " "!');
  })
  .on(caregoriesFullChange, (state, x) => x)

export const AddCategoryBlock: FC = React.memo(({ }) => {
  const categorieInputValue = useStore($categorieInputValue)
  const categoriesOfTodoList = useCategorieOfTodoList()
  const localStorage = useCategoriesLocalStorage()
  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input inputChange={e => categorieOnChange(e.target.value)} value={categorieInputValue} />
        <Button onClick={() => { categoriesAdd(categorieInputValue); categorieOnChange('') }}>
          Add
        </Button>
      </div>
    </div>
  );
});