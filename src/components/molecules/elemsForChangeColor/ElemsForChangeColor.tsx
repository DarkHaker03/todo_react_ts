import React, { FC } from 'react';

import styles from './index.module.css';

interface IElemsForChangeColor {
  elementsForChangeColor: string[],
  whatChange: string,
  whatChangeFunc: (value: string) => void
}
export const ElemsForChangeColor: FC<IElemsForChangeColor> = React.memo(({ elementsForChangeColor, whatChange, whatChangeFunc }) => {
  console.log('rerender');
  return (
    <>
      {elementsForChangeColor.map((x, idx) => {
        return (
          <div key={idx} className={styles.whatItemsForChange} onClick={() => whatChangeFunc(x)}>{x} {whatChange === x ? '-' : null}</div>
        );
      })}
    </>
  );
});