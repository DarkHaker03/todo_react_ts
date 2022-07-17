import React, { FC, useEffect } from 'react';

import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';

import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';


import { $todoList, redactTodoList } from '../../../global/hooks/todoList/useTodoList';

import { Options } from '../../atoms/castomSelect/Options';
import { $categories } from '../addCategoryBlock/logic/index';

// import { seletedAllItem } from '../../hooks/todoList/useTodoListReturnItem';

import { $selectedItemId } from '../itemTodo/logic/index';

import styles from './index.module.css';


export const RedactItemBlock: FC = React.memo(({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  let seletedItemId = useStore($selectedItemId)
  const seletedItem = useStore($todoList).filter(x => x.id === seletedItemId)[0]
  useEffect(() => {
    if (seletedItemId !== 0 && seletedItem !== undefined) {
      setInputValue(seletedItem.title)
      setTextAreaValue(seletedItem.text)
      setSelectedValue(seletedItem.category)
    } else if (seletedItemId !== 0 && seletedItem === undefined) {
      setInputValue('')
      setTextAreaValue('')
      setSelectedValue([])
    }
  }, [seletedItem])
  const redactItemTodoList = () => {
    console.log(seletedItem)
    if (seletedItem !== undefined) {
      redactTodoList(
        {
          id: seletedItemId,
          idx: seletedItem.idx,
          title: inputValue,
          text: textAreaValue,
          category: selectedValue,
        }
      )
      setInputValue('');
      setTextAreaValue('');
      setSelectedValue([]);
    }
  }
  const cleanFields = () => {
    setInputValue('');
    setTextAreaValue('');
    setSelectedValue([]);
  }
  return (
    <div>
      <h3>Redact item</h3>
      <div className={styles.block}>
        <Input inputChange={inputOnChangeValue} value={inputValue} />
        <Select >
          <Options optionsValue={optionsValue} selectedValue={selectedValue} onChangeSelectedOption={onChangeSelectedOption} />
        </Select>
        <Button onClick={cleanFields}>
          Clean
        </Button>
        <Button onClick={redactItemTodoList}>
          Redact
        </Button>
      </div>
      <TextArea textAreaChange={textAreaOnChangeValue} value={textAreaValue} />
    </div>
  );
});