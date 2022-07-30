import { createEvent, createStore } from 'effector';

import CSS from 'csstype';


export const setTheme = createEvent<CSS.Properties>()
export const setItemsStyle = createEvent<{ background: string, color: string }>()
export const setWhatChange = createEvent<string>()
export const themeChange = createEvent<React.MouseEvent<HTMLDivElement>>()


const objectCheck = (_: object, state: object) => {
	return JSON.stringify(_) !== JSON.stringify(state)
}

export const $theme = createStore<CSS.Properties>({}, { updateFilter: objectCheck })
export const $itemStyle = createStore<{ background: string, color: string }>({ background: '', color: '' }, { updateFilter: objectCheck })
export const $whatChange = createStore<string>('')


export const whatChangeFunc = (value: string) => {
	if (value === 'default') {
		setTheme({});
		setItemsStyle({ background: '', color: '' });
		return;
	}
	setWhatChange(value);
};
