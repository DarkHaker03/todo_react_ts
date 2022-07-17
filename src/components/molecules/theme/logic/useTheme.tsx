import React, { useCallback, useEffect, useState } from 'react';

import CSS from 'csstype';

import { useThemeLocalStorage } from './useThemeLocalStorage';
import { useThemeChange } from './useThemeChange';

export const useTheme = () => {
	const [theme, setTheme] = useState<CSS.Properties>({});
	const [itemsStyle, setItemsStyle] = useState<{ background: string, color: string }>({ background: '', color: '' });
	const [whatChange, setWhatChange] = useState<string>('text');

	useThemeLocalStorage({ setItemsStyle, setTheme, itemsStyle, theme })

	const whatChangeFunc = useCallback((value: string) => {
		if (value === 'default') {
			setTheme({});
			setItemsStyle({ background: '', color: '' });
			return;
		}
		setWhatChange(value);
	}, [whatChange]);

	const { themeChange } = useThemeChange({ whatChange, setTheme, setItemsStyle, itemsStyle, theme })

	return { theme, itemsStyle, themeChange, whatChangeFunc, whatChange };
};