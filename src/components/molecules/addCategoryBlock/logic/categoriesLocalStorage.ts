import { createEffect, forward } from 'effector';

import { $categories, caregoriesFullChange } from './categories'

const categories = $categories.getState()
if (localStorage.getItem('categories') === null) {
	localStorage.setItem('categories', JSON.stringify(categories));
} else {
	caregoriesFullChange(JSON.parse(localStorage.getItem('categories') || ''));
}

const categoriesLocalStorageUpdateFx = createEffect((state: string[]) => {
	localStorage.setItem('categories', JSON.stringify(state));
})
forward({
	from: $categories,
	to: categoriesLocalStorageUpdateFx
})