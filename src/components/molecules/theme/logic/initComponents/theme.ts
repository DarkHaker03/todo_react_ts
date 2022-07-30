import { $theme, $itemStyle, $whatChange, setTheme, setItemsStyle, setWhatChange } from '../index';


$theme
	.on(setTheme, (_, state) => state)


$itemStyle
	.on(setItemsStyle, (_, state) => state)


$whatChange
	.on(setWhatChange, (_, state) => state)