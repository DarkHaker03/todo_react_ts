import { FC, useEffect } from 'react';

import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';

import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';


import { $todoList } from '../../../global/store/todoList/todoList';

import { Options } from '../../atoms/castomSelect/Options';
import { $categories } from '../addCategoryBlock/logic/index';

import { $selectedItemId, selectItem } from '../itemTodo/logic/index';

import styles from './index.module.css';
import { redactTodoList } from './logic';


export const RedactItemBlock: FC = ({ }) => {
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
    selectItem(0)
    setInputValue('');
    setTextAreaValue('');
    setSelectedValue([]);
  }
  return (
    <div>
      <h3>Redact item</h3>
      <div className={styles.block}>
        <Input inputChange={inputOnChangeValue} value={seletedItemId != 0 ? inputValue : ''} />
        <Select >
          <Options optionsValue={optionsValue} selectedValue={seletedItemId != 0 ? selectedValue : []} onChangeSelectedOption={onChangeSelectedOption} />
        </Select>
        <Button onClick={cleanFields}>
          Clean
        </Button>
        <Button onClick={redactItemTodoList}>
          Redact
        </Button>
      </div>
      <TextArea textAreaChange={textAreaOnChangeValue} value={seletedItemId != 0 ? textAreaValue : ''} />
    </div>
  );
};