import { createEffect, forward } from 'effector';

import { $categories, caregoriesFullChange } from './categories'

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