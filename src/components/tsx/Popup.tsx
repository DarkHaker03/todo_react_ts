import { FC } from "react"
import { IPopup } from "./interfaces"

export const Popup: FC<IPopup> = ({ onClick }) => {
	return (
		<div className="popup">
			<div>
				<div className="popup__question">Are you sure what you want delete this item ?</div>
				<button className="popup_btn" onClick={() => onClick('yes')}>Yes</button>
				<button className="popup_btn" onClick={() => onClick('no')}>No</button>
			</div>
		</div>
	)
}