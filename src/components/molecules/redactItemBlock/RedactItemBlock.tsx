import { FC } from 'react';

import { useStore } from 'effector-react';

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { TextArea } from '../../atoms/textArea/TextArea';

import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';

import { $todoList } from '../../../global/store/todoList/todoList';

import { Options } from '../../atoms/castomSelect/Options';
import { $categories } from '../addCategoryBlock/logic/categories';

import styles from './index.module.css';
import { $selectedItemId } from '../itemTodo/logic/selectedItemId';
import { useSelectedItemUpdate } from './logic/hooks/useSelectedItemUpdate';
import { useRedactItemTodoList } from './logic/hooks/useRedactItemTodoList';
import { useCleanFields } from './logic/hooks/useCleanFields';


export const RedactItemBlock: FC = () => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  let seletedItemId = useStore($selectedItemId)
  const seletedItem = useStore($todoList).filter(x => x.id === seletedItemId)[0]
  useSelectedItemUpdate({ seletedItem, seletedItemId, setInputValue, setSelectedValue, setTextAreaValue })
  const redactItemTodoList = useRedactItemTodoList({ seletedItem, seletedItemId, setInputValue, setSelectedValue, setTextAreaValue, inputValue, textAreaValue, selectedValue })
  const cleanFields = useCleanFields({ setInputValue, setTextAreaValue, setSelectedValue })
  return (
    <div>
      <h3>Redact item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={seletedItemId != 0 ? inputValue : ''} />
        <Select >
          <Options options={optionsValue} selectedValues={seletedItemId != 0 ? selectedValue : []} changeSelectedOptions={onChangeSelectedOption} />
        </Select>
        <Button onClick={cleanFields}>
          Clean
        </Button>
        <Button onClick={redactItemTodoList}>
          Redact
        </Button>
      </div>
      <TextArea onChange={textAreaOnChangeValue} value={seletedItemId != 0 ? textAreaValue : ''} />
    </div>
  );
};