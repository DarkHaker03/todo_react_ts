import './todo.css';
import styles from './todo.module.css';

import { useTheme } from './components/hooks/useTheme';

import { Header } from './components/organisms/header/Header';
import { Main } from './components/organisms/main/Main';

export const Todo = () => {
  const { theme, itemsStyle, themeChange, whatChangeFunc, whatChange } = useTheme();
  console.log('rerender Todo');
  return (
    <div className={[styles.wrapper].join(' ')} style={theme}>
      <style>
        {itemsStyle.background}
        {itemsStyle.color}
      </style>
      <Header whatChange={whatChange} whatChangeFunc={whatChangeFunc} themeChange={themeChange} />
      <Main />
    </div>
  );
};