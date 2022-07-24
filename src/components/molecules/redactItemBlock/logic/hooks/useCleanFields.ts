import { selectItem } from "../../../itemTodo/logic/selectedItemId";


interface IUseCleanFields {
	setInputValue: React.Dispatch<React.SetStateAction<string>>,
	setTextAreaValue: React.Dispatch<React.SetStateAction<string>>,
	setSelectedValue: React.Dispatch<React.SetStateAction<string[]>>,
}

export const useCleanFields = ({ setInputValue, setTextAreaValue, setSelectedValue }: IUseCleanFields) => {

	const cleanFields = () => {
		selectItem(0)
		setInputValue('');
		setTextAreaValue('');
		setSelectedValue([]);
	}
	return cleanFields
}