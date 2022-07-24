import { useStore } from 'effector-react';
import React, { FC } from 'react';

import cx from "clsx"

import { $colors } from '../../../global/store/colors/colorsOfTheme';


import styles from './index.module.css';

interface ICirclsOfColor {
  colorClick: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const CirclsOfColor: FC<ICirclsOfColor> = React.memo(({ colorClick }) => {
  const colors = useStore($colors)
  return (
    <>
      {colors.map((x, idx) => (
        <div key={idx} className={cx(styles.circle, styles.margin)} style={x} onClick={colorClick}></div>
      ),
      )}
    </>
  );
});