import { FC } from 'react';

import { Categories } from '../categories/Categories';

import './logic/index'

import styles from './index.module.css';
import { selectItem } from './logic/selectedItemId';
import { selectItemForDelete } from './logic/selectedItemIdForDelete';
import { setConfirm } from '../../organisms/popup/logic/confirm';

export interface IItemTodo {
  id: number,
  idx: number,
  title: string,
  text: string,
  category: string[],
}

export interface IItemTodoWithBtns extends IItemTodo {
}

export const ItemTodo: FC<IItemTodoWithBtns> = ({ id, idx, title, text, category, }) => {
  return (
    <div className={styles.itemTodo}>
      <div className={styles.itemTodo__blockText}>
        <div> Number {idx}.</div>
        <div> Title {title}.</div>
        <div> Text: {text}.</div>
        <div>
          Category:
          <span>
            <Categories categories={category} />
          </span>
        </div>
      </div>
      <div>
        <img className={styles.itemTodo__btnDelete} src="./img/delete.svg" onClick={() => { selectItemForDelete(id); setConfirm(true); }} />
        <img onClick={() => selectItem(id)} className={styles.itemTodo__btnRedact} src="./img/redact.svg" alt="" />
      </div>
    </div>
  );
};