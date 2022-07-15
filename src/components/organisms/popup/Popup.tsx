import { FC } from 'react';

import styles from './index.module.css';



export const Popup: FC = ({ }) => {
  return (
    <div className={styles.popup}>
      <div>
        <div className={styles.popup__question}>Are you sure what you want delete this item ?</div>
        <button className={styles.popup_btn} onClick={() => ('yes')}>Yes</button>
        <button className={styles.popup_btn} onClick={() => ('no')}>No</button>
      </div>
    </div>
  );
};