import { useContext } from "react";
import { TodosContext } from "./context/TodosContextProvider";
import useTodoContextHook from "./context/TodoContextHoook";

type DeleteBtnProps = {
  id: number;
};
const DeleteBtn = ({ id }: DeleteBtnProps) => {
  const { deleteTodo } = useTodoContextHook();
  return <button onClick={(event) => deleteTodo(event, id)}>❌</button>;
};

export default DeleteBtn;
