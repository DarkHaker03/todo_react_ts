import { createEvent, createStore } from 'effector';

import CSS from 'csstype';
// import { useCallback } from 'react';
// import { themeLocalStorageStartFx } from './themeLocalStorage';

export const setTheme = createEvent<CSS.Properties>()
export const setItemsStyle = createEvent<{ background: string, color: string }>()
export const setWhatChange = createEvent<string>()


export const $theme = createStore<CSS.Properties>({})
	.on(setTheme, (_, state) => state)

export const $itemStyle = createStore<{ background: string, color: string }>({ background: '', color: '' })
	.on(setItemsStyle, (_, state) => state)

export const $whatChange = createStore<string>('')
	.on(setWhatChange, (_, state) => state)

// themeLocalStorageStartFx()


export const whatChangeFunc = (value: string) => {
	if (value === 'default') {
		setTheme({});
		setItemsStyle({ background: '', color: '' });
		return;
	}
	setWhatChange(value);
};
