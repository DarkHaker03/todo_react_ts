import { useStore } from 'effector-react';
import { FC } from 'react';
import cx from "clsx"

import { $colors } from '../../../global/store/colors/colorsOfTheme';

import { themeChange } from '../theme/logic/index';

import styles from './index.module.css';

export const CirclsOfColor: FC = () => {
  const colors = useStore($colors)
  return (
    <>
      {colors.map((x, idx) => (
        <div key={idx} className={cx(styles.circle, styles.margin)} style={x} onClick={themeChange}></div>
      ),
      )}
    </>
  );
};