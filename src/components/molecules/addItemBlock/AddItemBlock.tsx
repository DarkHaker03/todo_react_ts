import { FC } from 'react';
import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';
import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';
import { Options } from '../../atoms/castomSelect/Options';

import { $categories } from '../addCategoryBlock/logic/index';

import { setTodoList } from '../../../global/hooks/todoList/useTodoList';


import styles from './index.module.css';

export const AddItemBlock: FC = ({ }) => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  const addItemTodoList = () => {
    if (inputValue.length != 0) {
      setTodoList(
        { title: inputValue, text: textAreaValue, category: selectedValue }
      )
      setInputValue('');
      setTextAreaValue('');
      setSelectedValue([]);
    }
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
};