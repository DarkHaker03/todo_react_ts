import React, { FC, useEffect } from 'react';
import { useStore } from 'effector-react';

import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { useInput } from '../../hooks/useInput';
import { useSelect } from '../../hooks/useSelect';
import { Options } from '../../atoms/castomSelect/Options';


import { $categories } from '../addCategoryBlock/AddCategoryBlock';

import { setTodoList } from '../../hooks/todoList/useTodoList';

import { setFilterData } from '../../hooks/todoList/useFilterTodoList';


import styles from './index.module.css';


export const SearchItemBlock: FC = React.memo(() => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  useEffect(() => {
    setFilterData({
      title: inputValue,
      selectedOptions: selectedValue
    })
  }, [inputValue, selectedValue])
  return (
    <div>
      <h3>Search item</h3>
      <div className={styles.block}>
        <Input inputChange={inputOnChangeValue} value={inputValue} />
        <Select >
          <Options optionsValue={optionsValue} selectedValue={selectedValue} onChangeSelectedOption={onChangeSelectedOption} />
        </Select>
      </div>
    </div>
  );
});