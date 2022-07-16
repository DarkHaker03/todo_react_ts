import { createEvent } from 'effector';
import { createStore } from 'effector';
import { FC } from 'react';

import { IremoveBtn, IRedactBtn } from '../../atoms/button/Button'
import { deleteItemOfTodoList } from '../../hooks/todoList/useTodoList';

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
const selectItem = createEvent<number>()
export const $selectedItem = createStore<number>(0)
  .on(selectItem, (state, x) => x)

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
            <Categories category={category} />
          </span>
        </div>
      </div>
      <div>
        <img className={styles.itemTodo__btnDelete} src="./img/delete.svg" onClick={() => deleteItemOfTodoList(id)} />
        <img onClick={() => selectItem(id)} className={styles.itemTodo__btnRedact} src="./img/redact.svg" alt="" />
      </div>
    </div>
  );
};