import { FC } from 'react';

import styles from './index.module.css';

interface ICategories {
  categories: string[]
}

export const Categories: FC<ICategories> = ({ categories }) => {
  return (
    <>
      {categories.map((x, index) => <span key={index} className={styles.categoryItem}> {x}</span>)}
    </>
  );
};