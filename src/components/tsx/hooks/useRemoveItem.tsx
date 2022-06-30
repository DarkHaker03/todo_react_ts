import { ITodo } from "../interfaces";
export const useRemoveItem = ({ todo, setTodo }: ITodo) => {
	const removeItem = (id: number) => {
		setTodo(todo.filter(x => x.id !== id))
	}
	return { removeItem }
}