import { FC } from 'react';

import cx from 'clsx';

import styles from './index.module.css';

interface IOptions {
  optionsValue: string[],
  selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void,
  selectedValue: string[],
}

export const Options: FC<IOptions> = ({ optionsValue, selectValueChange, selectedValue }) => {
  return (
    <>
      {
        optionsValue.map((x, idx) => (
          <div className={cx('select__item', styles.item, selectedValue.some(a => a === x) && styles.itemSelected)} key={idx} onClick={selectValueChange} >
            {selectedValue.some(a => a === x) ? x : x}
          </div>
        ),
        )
      }
    </>
  );
};