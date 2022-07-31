import { forward } from 'effector';
import { mountLocalStorageEffecttor } from '../../localStorage/mountLocalStorageEffecttor';
import { categoriesLocalStorageUpdateFx } from '../index';

import { $categories, caregoriesFullChange } from '../index'

mountLocalStorageEffecttor($categories, 'categories', caregoriesFullChange)

forward({
	from: $categories,
	to: categoriesLocalStorageUpdateFx
})