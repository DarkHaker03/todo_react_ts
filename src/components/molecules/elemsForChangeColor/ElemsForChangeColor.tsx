import { useStore } from 'effector-react';
import { FC } from 'react';
import { $whatChange } from '../theme/logic/theme';

import styles from './index.module.css';

interface IElemsForChangeColor {
  whatChangeFunc: (value: string) => void
}

const elementsForChangeColor = ['text', 'backGround', 'items', 'textInItems'];

export const ElemsForChangeColor: FC<IElemsForChangeColor> = ({ whatChangeFunc }) => {
  const whatChange = useStore($whatChange)
  console.log('rerender ElemsForChangeColor');
  return (
    <>
      {elementsForChangeColor.map((x, idx) => {
        return (
          <div key={idx} className={styles.whatItemsForChange} onClick={() => whatChangeFunc(x)}>{x} {whatChange === x ? '-' : null}</div>
        );
      })}
    </>
  );
};