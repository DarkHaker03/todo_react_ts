import { useStore } from 'effector-react';

import { FC } from 'react';

import { $selectedItemIdForDelete, deleteItemOfTodoList } from '../../molecules/itemTodo/logic';

import { setConfirm } from '../contOutPutList/ContOutputList';

import styles from './index.module.css';

export const Popup: FC = ({ }) => {
  const selectedItemId = useStore($selectedItemIdForDelete)
  return (
    <div className={styles.popup}>
      <div>
        <div className={styles.popup__question}>Are you sure what you want delete this item ?</div>
        <button className={styles.popup_btn} onClick={() => { setConfirm(false); deleteItemOfTodoList(selectedItemId) }}>Yes</button>
        <button className={styles.popup_btn} onClick={() => setConfirm(false)}>No</button>
      </div>
    </div>
  );
};