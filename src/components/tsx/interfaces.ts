import React from "react";

export interface IInput {
	inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string,
	// styles: string
}
export interface IItemTodo {
	id: number,
	idx: number,
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
}

export interface IItemTodoWithBtns extends IItemTodo, IremoveBtn, IRedactBtn {

}
export interface IButton {
	onClick: () => void,
	children: React.ReactNode,
	styles: string

}
export interface ITodo {
	todo: IItemTodo[],
	setTodo: React.Dispatch<React.SetStateAction<IItemTodo[]>>
}
export interface IUseAddItem extends ITodo {
	inputPutValue: string,
	setInputPutValue: React.Dispatch<React.SetStateAction<string>>,

}
export interface IUseFilter {
	searchFilterTodo: IItemTodo[]
}
export interface ISelect {
	// selectValue: string
	selectedValue: string,
	selectValueChange: React.ChangeEventHandler<HTMLSelectElement>,
	optionsValue: string[],
}
export interface IPopup {
	onClick: (answer: string) => void
}