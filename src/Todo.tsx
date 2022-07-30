import { useStore } from 'effector-react';

import { Header } from './components/organisms/header/Header';
import { Main } from './components/organisms/main/Main';

import { $itemStyle, $theme } from './components/molecules/theme/logic/theme';

import './todo.css';
import styles from './todo.module.css';


import './global/store/init'

export const Todo = () => {
  const itemsStyle = useStore($itemStyle);
  const theme = useStore($theme)
  console.log('rerender Todo');
  return (
    <div className={styles.wrapper} style={theme}>
      <style>
        {itemsStyle.background}
        {itemsStyle.color}
      </style>
      <Header />
      <Main />
    </div>
  );
};