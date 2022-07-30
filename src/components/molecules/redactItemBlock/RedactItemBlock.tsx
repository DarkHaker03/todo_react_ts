import { FC } from 'react';

import { useStore } from 'effector-react';

import './logic/init'

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';
import { TextArea } from '../../atoms/textArea/TextArea';

import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';

import { $todoList } from '../../../global/store/todoList/index';

import { $selectedItemId, selectItemId } from '../itemTodo/logic/index';
import { useSelectedItemUpdate } from './logic/hooks/useSelectedItemUpdate';
import { useRedactItemTodoList } from './logic/hooks/useRedactItemTodoList';

import styles from './index.module.css';
import { SelectCategories } from '../../atoms/castomSelect/selectCategories/SelectCategories';
import { OptionsCategories } from '../../atoms/castomSelect/selectCategories/OptionsCategories';

export const RedactItemBlock: FC = () => {

  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()

  const selectedItemId = useStore($selectedItemId)
  const selectedItem = useStore($todoList).filter(x => x.id === selectedItemId)[0]

  useSelectedItemUpdate({ selectedItem, setInputValue, setSelectedValue, setTextAreaValue })

  const redactItemTodoList = useRedactItemTodoList({ selectedItem, inputValue, textAreaValue, selectedValue })

  const cleanFields = () => {
    selectItemId(0)
    setInputValue('');
    setTextAreaValue('');
    setSelectedValue([]);
  }

  return (
    <div>
      <h3>Redact item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={selectedItemId != 0 ? inputValue : ''} />
        <SelectCategories >
          <OptionsCategories selectedValues={selectedItemId != 0 ? selectedValue : []} changeSelectedOptions={onChangeSelectedOption} />
        </SelectCategories>
        <Button onClick={cleanFields}>
          Clean
        </Button>
        <Button onClick={redactItemTodoList}>
          Redact
        </Button>
      </div>
      <TextArea onChange={textAreaOnChangeValue} value={selectedItemId != 0 ? textAreaValue : ''} />
    </div>
  );
};