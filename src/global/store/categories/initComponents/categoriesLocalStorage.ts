import { forward } from 'effector';
import { categoriesLocalStorageUpdateFx } from '../index';

import { $categories, caregoriesFullChange } from '../index'

const categories = $categories.getState()

if (localStorage.getItem('categories') === null) {
	localStorage.setItem('categories', JSON.stringify(categories));
} else {
	caregoriesFullChange(JSON.parse(localStorage.getItem('categories') || ''));
}

forward({
	from: $categories,
	to: categoriesLocalStorageUpdateFx
})