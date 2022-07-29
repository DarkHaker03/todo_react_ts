import { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';


interface IOptions {
  options: string[],
  changeSelectedOptions: (value: string) => void,
  selectedValues: string[],
}

export const Options: FC<IOptions> = ({ options, changeSelectedOptions, selectedValues }) => {
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