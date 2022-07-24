import { useStore } from "effector-react";
import { $itemStyle, $theme, $whatChange, setItemsStyle, setTheme } from "./theme";

export const themeChange = (event: React.MouseEvent<HTMLDivElement>) => {
	const whatChange = useStore($whatChange)
	const theme = useStore($theme)
	const itemsStyle = useStore($itemStyle)
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
};