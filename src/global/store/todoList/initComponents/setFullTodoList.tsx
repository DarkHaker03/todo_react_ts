import { $todoList, setFullTodoList } from "..";



$todoList
  .on(setFullTodoList, (_, state) => state)