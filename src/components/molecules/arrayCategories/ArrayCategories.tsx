import { FC } from 'react';

import styles from './index.module.css';

interface ICategories {
  categories: string[]
}

export const ArrayCategories: FC<ICategories> = ({ categories }) => {

  console.log("rerender Arraycategories")

  return (
    <>
      {categories.map((x, index) => <span key={index} className={styles.categoryItem}> {x}</span>)}
    </>
  );
};