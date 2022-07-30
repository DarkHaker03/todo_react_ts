import { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';
import { useStore } from 'effector-react';
import { $categories } from '../../../molecules/addCategoryBlock/logic/categories';


interface IOptions {
  changeSelectedOptions: (value: string) => void,
  selectedValues: string[],
}

export const OptionsCategories: FC<IOptions> = ({ changeSelectedOptions, selectedValues }) => {
  const options = useStore($categories)
  return (
    <>
      {
        options.map((x, idx) => (
          <div className={cx('select__item', styles.item, selectedValues.some(a => a === x) && styles.itemSelected)} key={idx} onClick={() => changeSelectedOptions(x)} >
            {selectedValues.some(a => a === x) ? x : x}
          </div>
        ),
        )
      }
    </>
  );
};