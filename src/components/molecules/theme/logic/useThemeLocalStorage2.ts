import { useEffect } from "react";

import CSS from 'csstype';


interface IUseThemeLocalStorage {
	setItemsStyle: React.Dispatch<React.SetStateAction<{
		background: string;
		color: string;
	}>>,
	setTheme: React.Dispatch<React.SetStateAction<CSS.Properties<0 | (string & {}), string & {}>>>,
	itemsStyle: {
		background: string;
		color: string;
	},
	theme: CSS.Properties<0 | (string & {}), string & {}>
}

export const useThemeLocalStorage = ({ setItemsStyle, setTheme, itemsStyle, theme }: IUseThemeLocalStorage) => {
	useEffect(() => {
		if (localStorage.getItem('theme') !== null) {
			const localStorageValue = JSON.parse(localStorage.getItem('theme') || '');
			setItemsStyle(localStorageValue.itemsStyle);
			setTheme(localStorageValue.theme);
		}
	}, []);
	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify({ itemsStyle: itemsStyle, theme: theme }));
	}, [itemsStyle, theme]);
}