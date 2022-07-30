import { FC, useEffect } from 'react';

import { Input } from '../../atoms/input/Input';
import { useInput } from '../../../global/hooks/useInput';
import { useSelect } from '../../../global/hooks/useSelect';

import { setFilterData } from './logic';


import styles from './index.module.css';
import { SelectCategories } from '../../atoms/castomSelect/selectCategories/SelectCategories';
import { OptionsCategories } from '../../atoms/castomSelect/selectCategories/OptionsCategories';


export const SearchItemBlock: FC = () => {

  const [inputValue, setInputValue, inputOnChangeValue] = useInput()
  const [selectedValue, setSelectedValue, onChangeSelectedOption] = useSelect()

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
        <SelectCategories >
          <OptionsCategories selectedValues={selectedValue} changeSelectedOptions={onChangeSelectedOption} />
        </SelectCategories>
      </div>
    </div>
  );
};