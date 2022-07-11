import { FC } from "react";
import styles from "./categories.module.css"

interface ICategories {
	category: string[]
}

export const Categories: FC<ICategories> = ({ category }) => {
	return (
		<>
			{category.map((x, index) => <span key={index} className={styles.categoryItem}> {x}</span>)}
		</>
	)
}