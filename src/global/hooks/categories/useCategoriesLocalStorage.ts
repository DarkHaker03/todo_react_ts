import { createEffect, createEvent, forward } from 'effector';
import { sample } from 'effector';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

import { $categories, caregoriesFullChange } from '../../../components/molecules/addCategoryBlock/logic/index'



export const categoriesLocalStorageStartFx = createEffect((state = $categories) => {
	if (localStorage.getItem('categories') === null) {
		localStorage.setItem('categories', JSON.stringify(state));
	} else {
		caregoriesFullChange(JSON.parse(localStorage.getItem('categories') || ''));
	}
})

const categoriesLocalStorageUpdateFx = createEffect((state: string[]) => {
	localStorage.setItem('categories', JSON.stringify(state));
})
forward({
	from: $categories,
	to: categoriesLocalStorageUpdateFx
})

// export const useCategoriesLocalStorage = () => {
// 	const categories = useStore($categories)
// 	useEffect(() => {
// 		console.log('1')
// 		if (localStorage.getItem('categories') === null) {
// 			localStorage.setItem('categories', JSON.stringify(categories));
// 		} else {
// 			caregoriesFullChange(JSON.parse(localStorage.getItem('categories') || ''));
// 		}
// 	}, []);
// 	useEffect(() => {
// 		console.log('2')
// 		localStorage.setItem('categories', JSON.stringify(categories));
// 	}, [categories]);
// }