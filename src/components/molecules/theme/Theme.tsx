import React, { FC, useState } from 'react';
import cx from 'clsx';

import { ElemsForChangeColor } from '../elemsForChangeColor/ElemsForChangeColor';
import { CirclsOfColor } from '../circlesOfColors/CirclsOfColor';

import { useStore } from 'effector-react';
import { $whatChange, whatChangeFunc } from './logic/theme';
import styles from './index.module.css';



export const Theme: FC = () => {
  const whatChange = useStore($whatChange)
  const elementsForChangeColor = ['text', 'backGround', 'items', 'textInItems'];
  const [isTheme, setIsTheme] = useState<boolean>(false);
  console.log('rerender');
  return (
    <>
      { isTheme === false ?
        <div className={styles.open} onClick={() => setIsTheme(true)}>Theme</div>
        :
        <div className={styles.theme} >
          <img className={styles.btnDelete} onClick={() => setIsTheme(false)} src="./img/delete.svg" alt="" />
          <div>
            <ElemsForChangeColor elementsForChangeColor={elementsForChangeColor} whatChange={whatChange} whatChangeFunc={whatChangeFunc} />
          </div>
          <div className={styles.container}>
            <div className={styles.containerItems}>
              <CirclsOfColor />
            </div>
          </div>
          <div className={cx(styles.whatItemsForChange, styles.def)} onClick={() => whatChangeFunc('default')}>default</div>
        </div >
      }
    </>
  );
};