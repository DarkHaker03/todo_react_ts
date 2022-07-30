import { FC } from 'react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { TextArea } from '../../atoms/textArea/TextArea';
import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';

import { useAddItemTodoList } from './logic/useAddItemTodoList';

import styles from './index.module.css';
import { SelectCategories } from '../../atoms/castomSelect/selectCategories/SelectCategories';
import { OptionsCategories } from '../../atoms/castomSelect/selectCategories/OptionsCategories';

export const AddItemBlock: FC = () => {
  console.log("AddItemBlock")

  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()

  const addItemTodoList = useAddItemTodoList({ inputValue, textAreaValue, selectedValue })

  const cleanFields = () => {
    setInputValue('');
    setTextAreaValue('');
    setSelectedValue([]);
  }

  const handleClick = () => {
    addItemTodoList();
    cleanFields();
  }

  return (
    <div>
      <h3>Add item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={inputValue} />
        <SelectCategories >
          <OptionsCategories selectedValues={selectedValue} changeSelectedOptions={onChangeSelectedOption} />
        </SelectCategories>
        <Button onClick={handleClick}>
          Add
        </Button>
      </div>
      <TextArea onChange={textAreaOnChangeValue} value={textAreaValue} />
    </div>
  );
};