import { useTheme } from './components/molecules/theme/logic/useTheme';

import { Header } from './components/organisms/header/Header';
import { Main } from './components/organisms/main/Main';
import { Theme } from './components/molecules/theme/Theme';

import './todo.css';
import styles from './todo.module.css';

export const Todo = () => {
  const { theme, itemsStyle, themeChange, whatChangeFunc, whatChange } = useTheme();
  console.log('rerender Todo');
  return (
    <div className={styles.wrapper} style={theme}>
      <style>
        {itemsStyle.background}
        {itemsStyle.color}
      </style>
      <Header >
        <Theme whatChange={whatChange} whatChangeFunc={whatChangeFunc} colorClick={themeChange} />
      </Header>
      <Main />
    </div>
  );
};