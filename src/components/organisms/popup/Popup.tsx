import { useStore } from 'effector-react';

import './logic/index'
import { $confirm, setConfirm } from './logic/confirm';

import { FC } from 'react';
import { deleteItemOfTodoList } from '../../molecules/itemTodo/logic/deleteItemOfTodoList';
import { $selectedItemIdForDelete } from '../../molecules/itemTodo/logic/selectedItemIdForDelete';

import styles from './index.module.css';

export const Popup: FC = ({ }) => {
  const selectedItemId = useStore($selectedItemIdForDelete)
  const confirm = useStore($confirm)

  return (
    <>
      {
        confirm ?
          <div className={styles.popup
          } >
            <div>
              <div className={styles.popup__question}>Are you sure what you want delete this item ?</div>
              <button className={styles.popup_btn} onClick={() => { setConfirm(false); deleteItemOfTodoList(selectedItemId) }}>Yes</button>
              <button className={styles.popup_btn} onClick={() => setConfirm(false)}>No</button>
            </div>
          </div >
          : null
      }
    </>
  );
};