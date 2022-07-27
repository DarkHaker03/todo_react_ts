import { createEvent, createStore } from 'effector';

import CSS from 'csstype';

export const setTheme = createEvent<CSS.Properties>()
export const setItemsStyle = createEvent<{ background: string, color: string }>()
export const setWhatChange = createEvent<string>()

const objectCheck = (_: object, state: object) => {
	return JSON.stringify(_) !== JSON.stringify(state)
}

export const $theme = createStore<CSS.Properties>({}, { updateFilter: objectCheck })
	.on(setTheme, (_, state) => state)

export const $itemStyle = createStore<{ background: string, color: string }>({ background: '', color: '' }, { updateFilter: objectCheck })
	.on(setItemsStyle, (_, state) => state)

export const $whatChange = createStore<string>('')
	.on(setWhatChange, (_, state) => state)