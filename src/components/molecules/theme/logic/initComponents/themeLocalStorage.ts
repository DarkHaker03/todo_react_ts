import { sample } from "effector";
import { $itemStyle, $theme, setItemsStyle, setTheme } from "../index";

if (localStorage.getItem('theme') !== null) {
	const localStorageValue = JSON.parse(localStorage.getItem('theme') || '');
	setItemsStyle(localStorageValue.itemsStyle);
	setTheme(localStorageValue.theme);
}

sample({
	source: [$itemStyle, $theme],
	fn: ([itemsStyle, theme]) => {
		localStorage.setItem('theme', JSON.stringify({ itemsStyle, theme }));
		return ''
	}
})