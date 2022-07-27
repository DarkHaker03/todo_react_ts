import { createEvent, createStore } from 'effector';

import CSS from 'csstype';

export const setTheme = createEvent<CSS.Properties>()
export const setItemsStyle = createEvent<{ background: string, color: string }>()
export const setWhatChange = createEvent<string>()

export const $theme = createStore<CSS.Properties>({})
	.on(setTheme, (_, state) => {
		return JSON.stringify(_) === JSON.stringify(state) ? _ : state
	})

export const $itemStyle = createStore<{ background: string, color: string }>({ background: '', color: '' })
	.on(setItemsStyle, (_, state) => {
		return JSON.stringify(_) === JSON.stringify(state) ? _ : state
	})

export const $whatChange = createStore<string>('')
	.on(setWhatChange, (_, state) => {
		return JSON.stringify(_) === JSON.stringify(state) ? _ : state
	})