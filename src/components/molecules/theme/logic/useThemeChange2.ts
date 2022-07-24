import { useCallback } from "react";

import CSS from 'csstype';

interface IUseThemeChange {
	whatChange: string,
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


export const useThemeChange = ({ whatChange, setTheme, setItemsStyle, itemsStyle, theme }: IUseThemeChange) => {

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

	return { themeChange }
}