import React, { useCallback, useEffect, useState } from 'react';

import CSS from 'csstype';

import { useThemeLocalStorage } from './useThemeLocalStorage';

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
	const themeChange = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		const value = event.currentTarget.style;
		if (whatChange === 'text') {
			setTheme({ ...theme, color: value.backgroundColor });
		} else if (whatChange === 'backGround') {
			setTheme({ ...theme, backgroundColor: value.backgroundColor });
		} else if (whatChange === 'items') {
			setItemsStyle({
				...itemsStyle,
				color: `
			select{
				background-color: ${value.backgroundColor} !important;
				
			}
			.m_select{
				background-color: ${value.backgroundColor};
				
			}
			.select__item{
				background-color: ${value.backgroundColor};
				
			}
			button{
				background-color:  ${value.backgroundColor}!important;
			}
			input{
				background-color:  ${value.backgroundColor}!important;
			}
			textArea{
				background-color:  ${value.backgroundColor}!important;
			}
			`});
		} else if (whatChange === 'textInItems') {
			setItemsStyle({
				...itemsStyle,
				background: `
			select{
				color: ${value.backgroundColor} !important;
				
			}
			.m_select{
				color: ${value.backgroundColor} ;
				
			}
			.select__item{
				color: ${value.backgroundColor} ;
			}
			button{
				color:  ${value.backgroundColor}!important;
			}
			input{
				color:  ${value.backgroundColor}!important;
			}
			textArea{
				color:  ${value.backgroundColor}!important;
			}
			`});
		}
	}, [whatChange]);
	return { theme, itemsStyle, themeChange, whatChangeFunc, whatChange };
};