import { Header } from './components/organisms/header/Header';
import { Main } from './components/organisms/main/Main';
import { Theme } from './components/molecules/theme/Theme';

import { useStore } from 'effector-react';
import { $itemStyle, $theme } from './components/molecules/theme/logic/theme';

import './todo.css';
import styles from './todo.module.css';

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
      <Header >
        <Theme />
      </Header>
      <Main />
    </div>
  );
};