import { FC } from 'react';
import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';
import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';
import { Options } from '../../atoms/castomSelect/Options';

import { $categories } from '../addCategoryBlock/logic/categories';

import { useAddItemTodoList } from './logic/useAddItemTodoList';

import styles from './index.module.css';

export const AddItemBlock: FC = () => {
  console.log("AddItemBlock")
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  const addItemTodoList = useAddItemTodoList({ inputValue, textAreaValue, selectedValue, setInputValue, setTextAreaValue, setSelectedValue })
  return (
    <div>
      <h3>Add item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={inputValue} />
        <Select >
          <Options options={optionsValue} selectedValues={selectedValue} changeSelectedOptions={onChangeSelectedOption} />
        </Select>
        <Button onClick={addItemTodoList}>
          Add
        </Button>
      </div>
      <TextArea onChange={textAreaOnChangeValue} value={textAreaValue} />
    </div>
  );
};