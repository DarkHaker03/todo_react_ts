import React, { FC } from "react";
import { Button } from "../../atoms/button/Button";
import { Input } from "../../atoms/input/Input";
import styles from "./fields.module.css"
import { IFields } from "../../interfaces";
import { Select } from "../../atoms/castomSelect/Select";
import { TextArea } from "../../atoms/textArea/TextArea";

export const Fields: FC<IFields> = React.memo(({ childrens: { input, select, buttons, textArea, text } }) => {
	return (
		<div>
			<h3>{text}</h3>
			<div className={styles.block}>
				{input && <Input inputChange={input.inputChange} value={input.value} />}
				{select && <Select selectedValue={select.selectedValue} optionsValue={select.optionsValue} selectValueChange={select.selectValueChange} />}
				{buttons?.button1 && <Button onClick={buttons.button1.onClick}>
					{buttons.button1.text}
				</Button>}
				{buttons?.button2 && <Button onClick={buttons.button2.onClick}>
					{buttons.button2.text}
				</Button>}
			</div>
			{ textArea && <TextArea textAreaChange={textArea.textAreaChange} value={textArea.textAreaValue} />}
		</div>
	)
})