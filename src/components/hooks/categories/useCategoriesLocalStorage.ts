import { useStore } from 'effector-react';
import { useEffect } from 'react';

import { $categories, caregoriesFullChange } from '../../molecules/addCategoryBlock/AddCategoryBlock'


export const useCategoriesLocalStorage = () => {
	const categories = useStore($categories)
	useEffect(() => {
		console.log('1')
		if (localStorage.getItem('categories') === null) {
			localStorage.setItem('categories', JSON.stringify(categories));
		} else {
			caregoriesFullChange(JSON.parse(localStorage.getItem('categories') || ''));
		}
	}, []);
	useEffect(() => {
		console.log('2')
		localStorage.setItem('categories', JSON.stringify(categories));
	}, [categories]);
}