import React, { FC } from 'react';

import { themes } from '../../../global/store/colors/colorsOfTheme';

import styles from './index.module.css';

interface ICirclsOfColor {
  colorClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const CirclsOfColor: FC<ICirclsOfColor> = React.memo(({ colorClick }) => {
  console.log('rerender');
  return (
    <>
      {themes.map((x, idx) => (
        <div key={idx} className={[styles.circle, styles.margin].join(' ')} style={x} onClick={colorClick}></div>
      ),
      )}
    </>
  );
});