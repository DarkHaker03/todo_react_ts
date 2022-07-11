import { FC } from "react"
import { IPopup } from "../../interfaces"
import styles from "./popup.module.css"

export const Popup: FC<IPopup> = ({ onClick }) => {
	return (
		<div className={styles.popup}>
			<div>
				<div className={styles.popup__question}>Are you sure what you want delete this item ?</div>
				<button className={styles.popup_btn} onClick={() => onClick('yes')}>Yes</button>
				<button className={styles.popup_btn} onClick={() => onClick('no')}>No</button>
			</div>
		</div>
	)
}