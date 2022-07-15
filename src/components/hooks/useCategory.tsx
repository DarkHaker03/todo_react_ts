import { useCallback, useEffect, useState } from 'react';

import { IItemTodo } from '../molecules/itemTodo/ItemTodo';

import { useInput } from './useInput';

export interface IUseCategoryChange {
  category: string,
  inputCategoryChange: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void,
  addCategories: () => void,
  categories: string[]
}

export const useCategory = (todo: IItemTodo[]): IUseCategoryChange => {
  const [category, setCategory, inputCategoryChange] = useInput();
  const categories = ['f']
  // const optionsValue: string[] = [];
  // for (const i of todo) {
  //   for (const a of i.category) {
  //     const b = optionsValue.every(x => x !== a) ? optionsValue.push(a) : '';
  //   }
  // }
  // const [categories, setCategories] = useState<string[]>([...optionsValue]);
  const addCategories: () => void = () => {
    // if (!categories.some(x => x === category) && category !== '') {
    //   setCategories(prev => [...prev, category]);
    //   setCategory('');
    //   return
    // }
    // alert('This category already exists or category = " "!');
  }
  // useEffect(() => {
  //   if (localStorage.getItem('categories') === null) {
  //     localStorage.setItem('categories', JSON.stringify(categories));
  //   } else {
  //     setCategories(JSON.parse(localStorage.getItem('categories') || ''));
  //   }
  // }, []);
  // useEffect(() => {
  //   localStorage.setItem('categories', JSON.stringify(categories));
  // }, [categories]);
  return {
    category,
    inputCategoryChange,
    addCategories,
    categories,
  };
};

