import React, { useEffect, useState } from "react"
import CSS from 'csstype';
export const useTheme = () => {
	const [theme, setTheme] = useState<CSS.Properties>({})
	const [itemsStyle, setItemsStyle] = useState<{ background: string, color: string }>({ background: ``, color: `` })
	const [whatChange, setWhatChange] = useState<string>("text")
	useEffect(() => {
		if (localStorage.getItem("theme") !== null) {
			const localStorageValue = JSON.parse(localStorage.getItem("theme") || '')
			setItemsStyle(localStorageValue.itemsStyle)
			setTheme(localStorageValue.theme)
		}
	}, [])
	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify({ itemsStyle: itemsStyle, theme: theme }))
	}, [itemsStyle, theme])
	const whatChangeFunc = (event: React.MouseEvent<HTMLSpanElement>) => {
		const value = event.currentTarget.innerText
		if (value === "default") {
			setTheme({})
			setItemsStyle({ background: '', color: '' })
			return
		}
		setWhatChange(value)
	}
	const themeChange = (event: React.MouseEvent<HTMLDivElement>) => {
		const value = event.currentTarget.style
		if (whatChange === "text") {
			setTheme({ ...theme, color: value.backgroundColor })
		} else if (whatChange === "backGround") {
			setTheme({ ...theme, backgroundColor: value.backgroundColor })
		} else if (whatChange === "items") {
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
			`})
		} else if (whatChange === "textInItems") {
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
			`})
		}
	}
	return { theme, itemsStyle, themeChange, whatChangeFunc, whatChange }
}