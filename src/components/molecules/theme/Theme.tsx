import { FC, useState } from 'react';
import cx from 'clsx';
import './logic/index'

import { ElemsForChangeColor } from '../elemsForChangeColor/ElemsForChangeColor';
import { CirclsOfColor } from '../circlesOfColors/CirclsOfColor';

import { useStore } from 'effector-react';
import { $whatChange } from './logic/theme';
import styles from './index.module.css';
import { whatChangeFunc } from './logic/themeWhatChange';



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
