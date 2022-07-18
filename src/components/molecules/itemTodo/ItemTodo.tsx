import { FC } from 'react';

import { setConfirm } from '../../organisms/contOutPutList/ContOutputList'

import { Categories } from '../categories/Categories';

import { selectItem, selectItemForDelete } from './logic/index';

import styles from './index.module.css';

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