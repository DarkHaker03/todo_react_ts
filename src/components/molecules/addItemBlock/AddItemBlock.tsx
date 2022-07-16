import React, { FC } from 'react';
import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';
import { useInput } from '../../hooks/useInput';
import { useSelect } from '../../hooks/useSelect';
import { Options } from '../../atoms/castomSelect/Options';


import { $categories } from '../addCategoryBlock/AddCategoryBlock';

import { setTodoList } from '../../hooks/todoList/useTodoList';


import styles from './index.module.css';




export const AddItemBlock: FC = React.memo(({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  const addItemTodoList = () => {
    setTodoList(
      { title: inputValue, text: textAreaValue, category: selectedValue }
    )
    setInputValue('');
    setTextAreaValue('');
    setSelectedValue([]);
  }
  return (
    <div>
      <h3>Add item</h3>
      <div className={styles.block}>
        <Input inputChange={inputOnChangeValue} value={inputValue} />
        <Select >
          <Options optionsValue={optionsValue} selectedValue={selectedValue} onChangeSelectedOption={onChangeSelectedOption} />
        </Select>
        <Button onClick={addItemTodoList}>
          Add
        </Button>
      </div>
      <TextArea textAreaChange={textAreaOnChangeValue} value={textAreaValue} />
    </div>
  );
});