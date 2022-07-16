import { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';


interface IOptions {
  optionsValue: string[],
  onChangeSelectedOption: (value: string) => void,
  selectedValue: string[],
}

export const Options: FC<IOptions> = ({ optionsValue, onChangeSelectedOption, selectedValue }) => {
  return (
    <>
      {
        optionsValue.map((x, idx) => (
          <div className={cx('select__item', styles.item, selectedValue.some(a => a === x) && styles.itemSelected)} key={idx} onClick={() => onChangeSelectedOption(x)} >
            {selectedValue.some(a => a === x) ? x : x}
          </div>
        ),
        )
      }
    </>
  );
};