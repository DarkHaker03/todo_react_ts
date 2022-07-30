import React, { FC, useState } from 'react';

import cx from "clsx"

import styles from './index.module.css';

interface ICastomSelect {
  children: JSX.Element
}

export const SelectCategories: FC<ICastomSelect> = ({ children }) => {
  const [categoriesIsOpen, setcategoriesIsOpen] = useState(false);
  return (
    <>
      {categoriesIsOpen ?
        <div className={styles.close} onClick={() => setcategoriesIsOpen(false)}>
        </div>
        : ''
      }
      <div className={cx('m_select', styles.select)} onClick={() => setcategoriesIsOpen(true)}>
        {categoriesIsOpen ?
          <div className={styles.container} onClick={e => e.stopPropagation()}>
            {children}
          </div>
          :
          'categories'
        }
      </div>
    </ >
  );
};