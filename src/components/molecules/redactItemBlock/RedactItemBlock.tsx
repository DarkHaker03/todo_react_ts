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

import { $selectedItemId, selectItemId } from '../itemTodo/logic/selectedItemId';
import { useSelectedItemUpdate } from './logic/hooks/useSelectedItemUpdate';
import { useRedactItemTodoList } from './logic/hooks/useRedactItemTodoList';

import styles from './index.module.css';

export const RedactItemBlock: FC = () => {

  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [textAreaValue, setTextAreaValue, textAreaOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()

  const options = useStore($categories)
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
        <Select >
          <Options options={options} selectedValues={selectedItemId != 0 ? selectedValue : []} changeSelectedOptions={onChangeSelectedOption} />
        </Select>
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