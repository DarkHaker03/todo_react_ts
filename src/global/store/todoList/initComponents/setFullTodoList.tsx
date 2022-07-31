import { $todoList, setFullTodoList } from "..";



$todoList
  .on(setFullTodoList, (_, newState) => newState)