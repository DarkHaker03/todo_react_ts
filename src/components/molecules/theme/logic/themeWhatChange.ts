import { setItemsStyle, setTheme, setWhatChange } from "./theme";



export const whatChangeFunc = (value: string) => {
	if (value === 'default') {
		setTheme({});
		setItemsStyle({ background: '', color: '' });
		return;
	}
	setWhatChange(value);
};
