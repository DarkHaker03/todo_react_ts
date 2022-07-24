import { createEffect, sample } from "effector";
import { $itemStyle, $theme, setItemsStyle, setTheme } from "./theme";

export const themeLocalStorageStartFx = createEffect(() => {
	if (localStorage.getItem('theme') !== null) {
		const localStorageValue = JSON.parse(localStorage.getItem('theme') || '');
		setItemsStyle(localStorageValue.itemsStyle);
		setTheme(localStorageValue.theme);
	}
})

sample({
	source: { itemsStyle: $itemStyle, theme: $theme },
	fn: ({ itemsStyle, theme }) => {
		localStorage.setItem('theme', JSON.stringify({ itemsStyle: itemsStyle, theme: theme }));
	}
})