import { forward } from 'effector';
import { mountLocalStorageEffecttor } from '../../localStorage/mountLocalStorageEffecttor';
import { todoListLocalStorageUpdateFx } from '../index';

import { $todoList, setFullTodoList } from '../index'

mountLocalStorageEffecttor($todoList, 'todoList', setFullTodoList)

forward({
	from: $todoList,
	to: todoListLocalStorageUpdateFx
})
