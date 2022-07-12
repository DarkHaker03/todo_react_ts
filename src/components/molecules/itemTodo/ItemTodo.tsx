import { FC } from 'react';

import { IremoveBtn, IRedactBtn } from '../../atoms/button/Button'

import { Categories } from '../categories/Categories';

import styles from './index.module.css';

export interface IItemTodo {
  id: number,
  idx: number,
  title: string,
  text: string,
  category: string[],
}

export interface IItemTodoWithBtns extends IItemTodo, IremoveBtn, IRedactBtn {

}

export const ItemTodo: FC<IItemTodoWithBtns> = ({ id, idx, title, text, category, removeItem, redactItem }) => {
  return (
    <div className={styles.itemTodo}>
      <div className={styles.itemTodo__blockText}>
        <div> Number {idx}.</div>
        <div> Title {title}.</div>
        <div> Text: {text}.</div>
        <div>
          Category:
          <span>
            <Categories category={category} />
          </span>
        </div>
      </div>
      <div>
        <img className={styles.itemTodo__btnDelete} src="./img/delete.svg" onClick={() => removeItem(id)} />
        <img onClick={() => redactItem(id)} className={styles.itemTodo__btnRedact} src="./img/redact.svg" alt="" />
      </div>
    </div>
  );
};