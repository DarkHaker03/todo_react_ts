import { FC } from 'react';

import '../../../global/store/categories/index'

import { Button } from '../../atoms/button/Button';
import { Input } from '../../atoms/input/Input';

import { useInput } from '../../../global/hooks/useInput';

import { categoriesAdd } from '../../../global/store/categories/categories'

import styles from './index.module.css';

export const AddCategoryBlock: FC = () => {

  const [inputValue, setInputValue, inputOnChangeValue] = useInput()

  const handleClick = () => {
    categoriesAdd(inputValue);
    setInputValue('');
  }

  return (
    <div>
      <h3>Add Item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={inputValue} />
        <Button onClick={handleClick}>
          Add
        </Button>
      </div>
    </div>
  );
};