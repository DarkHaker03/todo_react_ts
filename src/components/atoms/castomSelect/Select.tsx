import React, { FC, useState } from 'react';

import { Options } from './Options';

import styles from './index.module.css';

export interface ISelect {
  selectedValue: string[],
  selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void,
  optionsValue: string[],
}

export const Select: FC<ISelect> = React.memo(({ optionsValue, selectValueChange, selectedValue }) => {
  const [categoriesIsOpen, setcategoriesIsOpen] = useState(false);
  return (
    <>
      {categoriesIsOpen ?
        <div className={styles.close} onClick={() => setcategoriesIsOpen(false)}>
        </div>
        : ''
      }
      <div className={['m_select'].join(' ')} onClick={() => setcategoriesIsOpen(true)}>
        {categoriesIsOpen ?
          <div className={styles.container} onClick={e => e.stopPropagation()}>
            <Options optionsValue={optionsValue} selectValueChange={selectValueChange} selectedValue={selectedValue} />
          </div>
          :
          'categories'
        }
      </div>
    </ >
  );
});