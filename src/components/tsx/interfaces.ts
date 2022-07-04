import React, { ChangeEventHandler } from "react";
import CSS from "csstype"
export interface IInput {
	inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string,
	// styles: string
}
export interface IItemTodo {
	id: number,
	idx: number,
	title: string,
	text: string,
	category: string,
}

export interface IremoveBtn {
	removeItem: (id: number) => void
}

export interface IRedactBtn {
	redactItem: (id: number) => void
}

export interface IOutputList extends IremoveBtn, IRedactBtn {
	searchFilterTodo: IItemTodo[],
	todoLength: number
}

export interface IItemTodoWithBtns extends IItemTodo, IremoveBtn, IRedactBtn {

}
export interface IButton {
	onClick: () => void,
	children: React.ReactNode,

}
export interface ITodo {
	todo: IItemTodo[],
	setTodo: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}
export interface IUseAddItem extends ITodo {
	inputTitleValue: string,
	inputTextValue: string,
	setInputPutValue: React.Dispatch<React.SetStateAction<string>>,
	setInputTextValue: React.Dispatch<React.SetStateAction<string>>,

}
export interface IUseFilter {
	searchFilterTodo: IItemTodo[]
}
export interface ISelect {
	selectedValue: string,
	selectValueChange: React.ChangeEventHandler<HTMLSelectElement>,
	optionsValue: string[],
}
export interface IPopup {
	onClick: (answer: string) => void
}
export interface ITheme {
	colorClick: (event: React.MouseEvent<HTMLDivElement>) => void,
	whatChangeFunc: (event: React.MouseEvent<HTMLSpanElement>) => void,
	whatChange: string
}
export interface ITextArea {
	textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
}