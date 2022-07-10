import "./todo.css"
import styles from "./components/css/todo.module.css"
import { useTheme } from "./components/tsx/hooks/useTheme"
import { Header } from "./components/tsx/Header"
import { Main } from "./components/tsx/Main"
export const Todo = () => {
	const { theme, itemsStyle, themeChange, whatChangeFunc, whatChange } = useTheme();
	console.log("rerender Todo")
	return (
		<div className={[styles.wrapper].join(" ")} style={theme}>
			<style>
				{itemsStyle.background}
				{itemsStyle.color}
			</style>
			<Header whatChange={whatChange} whatChangeFunc={whatChangeFunc} themeChange={themeChange} />
			<Main />
		</div>
	)
}