import { FC, useEffect } from 'react';
import { useStore } from 'effector-react';

import { Input } from '../../atoms/input/Input';
import { Select } from '../../atoms/castomSelect/Select';
import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';
import { Options } from '../../atoms/castomSelect/Options';

import { $categories } from '../addCategoryBlock/logic/categories';

import { setFilterData } from './logic';


import styles from './index.module.css';


export const SearchItemBlock: FC = () => {
  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()
  const optionsValue = useStore($categories)
  useEffect(() => {
    setFilterData({
      title: inputValue,
      selectedOptions: selectedValue
    })
  }, [inputValue, selectedValue])
  return (
    <div>
      <h3>Search item</h3>
      <div className={styles.block}>
        <Input onChange={inputOnChangeValue} value={inputValue} />
        <Select >
          <Options options={optionsValue} selectedValues={selectedValue} changeSelectedOptions={onChangeSelectedOption} />
        </Select>
      </div>
    </div>
  );
};