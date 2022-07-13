import React, { FC, useMemo } from 'react';

import cx from 'clsx';

import { useTodoList } from '../../hooks/useTodoList';
import { useAddItem } from '../../hooks/useAddItem';
import { useRemoveItem } from '../../hooks/useRemoveItem';
import { useCategory } from '../../hooks/useCategory';
import { useInputSearch } from '../../hooks/useInputSearch';
import { useRedactItem } from '../../hooks/useRedactItem';
import { ContOutPutList } from '../contOutPutList/ContOutputList';
import { Fields, IChildrens } from '../../molecules/fields/Fileds';
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
  const childrensArray: IChildrens[] = [
    {
      input: {
        inputChange: inputCategoryChange,
        value: category,
      },
      text: 'Add Category',
      buttons: {
        button1: {
          onClick: addCategories,
          text: 'Add',
        },
      },
    },
    {
      input: {
        inputChange: inputTitleChange,
        value: inputTitleValue,
      },
      text: 'Add item',
      buttons: {
        button1: {
          onClick: addItem,
          text: 'Add',
        },
      },
      select: {
        selectedValue: selectedCategory,
        optionsValue: categories,
        selectValueChange: itemCategory,
      },
      textArea: {
        textAreaChange: inputTextChange,
        textAreaValue: inputTextValue,
      },
    },
    {
      input: {
        inputChange: redactItemChange,
        value: redactItem?.title !== undefined ? redactItem.title : '',
      },
      text: 'Redact item',
      buttons: {
        button1: {
          onClick: cleanRedactItems,
          text: 'Clean',
        },
        button2: {
          onClick: redactItemFunc,
          text: 'Redact',
        },
      },
      select: {
        selectedValue: redactItem?.category !== undefined ? redactItem.category : ['any category'],
        optionsValue: categories,
        selectValueChange: itemCategoryRedact,
      },
      textArea: {
        textAreaChange: redactTextChange,
        textAreaValue: redactItem?.text !== undefined ? redactItem.text : '',
      },
    },
    {
      input: {
        inputChange: inputSearchChange,
        value: inputSearchValue,
      },
      text: 'Search item',
      select: {
        selectedValue: selectedOption,
        optionsValue: categories,
        selectValueChange: selectChange,
      },
    },
  ];
  const fields = useMemo(() => childrensArray.map((x, idx) => <Fields key={idx} childrens={x} />), [selectedOption, inputSearchValue, redactItem, inputTextValue, category, inputTitleValue, selectedCategory, categories]);

  return (
    //provider
    <div className={cx(styles.main, 'p-5')}>
      <div className={styles.container} >
        <div>Info...</div>
        {/*  one component */}
        {fields}
        {/* one component */}
        <ContOutPutList todoLength={todoList.length} searchFilterTodo={filterCategoryTodo} removeItem={removeItem} redactItem={selectRedactItemFunc} confirmation={confirmation} onClick={removeItemConfirmation} />
      </div>
    </div>
    //provider
  );
});