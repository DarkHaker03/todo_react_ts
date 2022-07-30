import { useStore } from 'effector-react';
import { FC } from 'react';

import { $confirm, setConfirm } from './logic/index';
import './logic/init'

import { deleteItemOfTodoList } from '../../molecules/itemTodo/logic/index';
import { $selectedItemIdForDelete } from '../../molecules/itemTodo/logic/index';

import styles from './index.module.css';

export const Popup: FC = () => {
  const selectedItemIdForDelete = useStore($selectedItemIdForDelete)
  const confirm = useStore($confirm)

  const handleClick = () => {
    setConfirm(false);
    deleteItemOfTodoList(selectedItemIdForDelete);
  }

  console.log("rerender Popup")
  return (
    <>
      {
        confirm ?
          <div className={styles.popup
          } >
            <div>
              <div className={styles.popup__question}>Are you sure what you want delete this item ?</div>
              <button className={styles.popup_btn} onClick={handleClick}>Yes</button>
              <button className={styles.popup_btn} onClick={() => setConfirm(false)}>No</button>
            </div>
          </div >
          : null
      }
    </>
  );
};