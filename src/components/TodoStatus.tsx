import useTodoContextHook from "./context/TodoContextHoook";

const TodoStatus = () => {
  const { completedTodoCount, totalTodoCount } = useTodoContextHook();
  return (
    <p>
      <b>{completedTodoCount}</b> / {totalTodoCount} todos completed
    </p>
  );
};

export default TodoStatus;
