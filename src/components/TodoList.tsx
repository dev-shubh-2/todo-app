import DeleteBtn from "./DeleteBtn";
import TodoLoader from "./TodoLoader";

import useTodoContextHook from "./context/TodoContextHoook";

function TodoList() {
  const { todos, todosAvailable, onTodocompletion } = useTodoContextHook();
  return (
    <ul className="overflow-y-auto scrollbar-hide">
      {todos.length == 0 &&
        (todosAvailable ? (
          <TodoLoader></TodoLoader>
        ) : (
          <li className="text-center mt-10 bg-[rgba(228,179,115,0.29)] border-t border-b border-black border-opacity-[0.3] ">
            No TODO available. Start by adding a TODO
          </li>
        ))}
      {todos.map((data) => (
        <li
          key={data.id}
          className="flex justify-between items-center px-5 mt-5 h-[50px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            onTodocompletion(data.id);
          }}
        >
          <span
            className={` ${
              data.iscompleted ? "line-through text-[#b19473]" : ""
            }`}
          >
            {data.text}
          </span>
          <DeleteBtn id={data.id} />
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
