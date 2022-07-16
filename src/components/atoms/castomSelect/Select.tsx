import React, { FC, useState } from 'react';

import styles from './index.module.css';

interface inter2 {
  children: JSX.Element
}

export const Select: FC<inter2> = React.memo(({ children }) => {
  const [categoriesIsOpen, setcategoriesIsOpen] = useState(false);
  return (
    <>
      {categoriesIsOpen ?
        <div className={styles.close} onClick={() => setcategoriesIsOpen(false)}>
        </div>
        : ''
      }
      <div className={styles.select} onClick={() => setcategoriesIsOpen(true)}>
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
});