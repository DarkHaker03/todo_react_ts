import React, { FC, useState } from 'react';


import { ElemsForChangeColor } from '../elemsForChangeColor/ElemsForChangeColor';
import { CirclsOfColor } from '../circlesOfColors/CirclsOfColor';

import styles from './index.module.css';

export interface IWhatChange {
  whatChangeFunc: (value: string) => void,
  whatChange: string
}

export interface ITheme extends IWhatChange {
  colorClick: (event: React.MouseEvent<HTMLDivElement>) => void,
}

export const Theme: FC<ITheme> = ({ colorClick, whatChangeFunc, whatChange }) => {
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
              <CirclsOfColor colorClick={colorClick} />
            </div>
          </div>
          <div className={[styles.whatItemsForChange, styles.def].join(' ')} onClick={() => whatChangeFunc('default')}>default</div>
        </div >
      }
    </>
  );
};