import React, { FC } from 'react';

import cx from 'clsx';

import { AddCategoryBlock } from '../../molecules/addCategoryBlock/AddCategoryBlock'
import { AddItemBlock } from '../../molecules/addItemBlock/AddItemBlock'
import { RedactItemBlock } from '../../molecules/redactItemBlock/RedactItemBlock'
import { SearchItemBlock } from '../../molecules/searchItemBlock/SearchItemBlock'

import { useTodoList } from '../../hooks/useTodoList';
import { useAddItem } from '../../hooks/useAddItem';
import { useRemoveItem } from '../../hooks/useRemoveItem';
import { useCategory } from '../../hooks/useCategory';
import { useInputSearch } from '../../hooks/useInputSearch';
import { useRedactItem } from '../../hooks/useRedactItem';
import { ContOutPutList } from '../contOutPutList/ContOutputList';
import { useInput } from '../../hooks/useInput';

import styles from './index.module.css';

export const Main: FC = React.memo(({ }) => {
  console.log('rerender Main');
  // in one component
  const { todoList, setTodoList } = useTodoList();
  const [inputTitleValue, setInputTitleValue, inputTitleChange] = useInput();
  const [inputTextValue, setInputTextValue, inputTextChange] = useInput();
  const { category, inputCategoryChange, addCategories, categories } = useCategory(todoList);
  const { addItem, itemCategory, selectedCategory } = useAddItem({ inputTitleValue, inputTextValue, setInputTitleValue, setInputTextValue, todoList, setTodoList });
  // stay
  const { removeItem, removeItemConfirmation, confirmation } = useRemoveItem({ todoList, setTodoList });
  // stay and set in provider
  const { selectRedactItemFunc, redactItemChange, redactItem, itemCategoryRedact, redactItemFunc, redactTextChange, cleanRedactItems } = useRedactItem({ todoList, setTodoList });
  const { inputSearchChange, inputSearchValue, filterCategoryTodo, selectChange, selectedOption } = useInputSearch({ todoList, setTodoList });
  return (
    <div className={cx(styles.main, 'p-5')}>
      <div className={styles.container} >
        <div>Info...</div>
        <AddCategoryBlock inputChange={inputCategoryChange} value={category} onClick={addCategories} />
        <AddItemBlock inputChange={inputTitleChange} value={inputTitleValue} onClick={addItem} selectedValue={selectedCategory} optionsValue={categories} selectValueChange={itemCategory} textAreaChange={inputTextChange} textAreaValue={inputTextValue} />
        <RedactItemBlock inputChange={redactItemChange} value={redactItem?.title !== undefined ? redactItem.title : ''} onClick={cleanRedactItems} onClick2={redactItemFunc} selectedValue={redactItem?.category !== undefined ? redactItem.category : ['any category']} optionsValue={categories} selectValueChange={itemCategoryRedact} textAreaChange={redactTextChange} textAreaValue={redactItem?.text !== undefined ? redactItem.text : ''} />
        <SearchItemBlock inputChange={inputSearchChange} value={inputSearchValue} selectedValue={selectedOption} optionsValue={categories} selectValueChange={selectChange} />
        <ContOutPutList todoLength={todoList.length} searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} confirmation={confirmation} onClick={removeItemConfirmation} />
      </div>
    </div>
  );
});