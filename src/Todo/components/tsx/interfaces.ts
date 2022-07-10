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
	category: string[],
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
export interface ITodoList {
	todoList: IItemTodo[],
	setTodoList: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}
export interface IUseAddItem extends ITodoList {
	inputTitleValue: string,
	inputTextValue: string,
	setInputTitleValue: React.Dispatch<React.SetStateAction<string>>,
	setInputTextValue: React.Dispatch<React.SetStateAction<string>>,

}
export interface IUseFilter {
	searchFilterTodo: IItemTodo[]
}
export interface ISelect {
	selectedValue: string[],
	selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void,
	optionsValue: string[],
}
export interface IPopup {
	onClick: (answer: string) => void
}
export interface IWhatChange {
	whatChangeFunc: (value: string) => void,
	whatChange: string
}
export interface ITheme extends IWhatChange {
	colorClick: (event: React.MouseEvent<HTMLDivElement>) => void,

}
export interface ITextArea {
	textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string;
}
// export interface IUseCategoryChange {

// }

export interface IHeader extends IWhatChange {
	themeChange: (event: React.MouseEvent<HTMLDivElement>) => void

}
export interface IMain {

}
export interface IContOutPutList extends IOutputList, IPopup {
	confirmation: boolean
}
export interface IChildrens {
	input?: {
		inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
		value: string
	},
	buttons?: {
		button1?: {
			onClick: () => void,
			text: string
		},
		button2?: {
			onClick: () => void
			text: string
		},
	},
	select?: {
		selectedValue: string[],
		optionsValue: string[],
		selectValueChange: (event: React.MouseEvent<HTMLDivElement>) => void
	},
	textArea?: {
		textAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
		textAreaValue: string,
	},
	text?: string
}
export interface IFields {
	childrens: IChildrens
}
export interface IInputMas {
	a: [
		string,
		React.Dispatch<React.SetStateAction<string>>,
		(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
	]
}
export interface IUseCategoryChange {
	category: string,
	inputCategoryChange: (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => void,
	addCategories: () => void,
	categories: string[]
}
export interface IChildrensArray {
	inputCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	inputTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	category: string,
	inputTitleValue: string,
	addCategories: () => void,
	cleanRedactItems: () => void,
	redactItemFunc: () => void,
	addItem: () => void,
	selectedCategory: string[],
	categories: string[],
	itemCategory: (event: React.MouseEvent<HTMLDivElement>) => void
	inputTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
	inputTextValue: string,
	redactItemChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	redactItem?: IItemTodo,
	itemCategoryRedact: (event: React.MouseEvent<HTMLDivElement>) => void,
	redactTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
	inputSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
	inputSearchValue: string,
	selectedOption: string[],
	selectChange: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
export interface IItemTodoArray {
	searchFilterTodo: IItemTodo[],
	removeItem: (id: number) => void,
	redactItem: (id: number) => void,
}