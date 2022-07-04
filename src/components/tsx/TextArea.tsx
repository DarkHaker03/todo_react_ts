import { FC } from "react";
import styles from "../css/textArea.module.css"
import { ITextArea } from "./interfaces";
export const TextArea: FC<ITextArea> = ({ textAreaChange, value }) => {
	return (
		<textarea className={styles.textArea} onChange={textAreaChange} value={value}>

		</textarea>
	)
}