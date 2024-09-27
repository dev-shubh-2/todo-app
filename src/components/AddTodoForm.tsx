import { useRef } from "react";
import Button from "./Button";
import useTodoContextHook from "./context/TodoContextHoook";

const AddTodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { addTodo } = useTodoContextHook();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(inputRef.current?.value);
        inputRef.current?.focus();
        inputRef.current.value = "";
      }}
    >
      <h2 className="font-bold text-[#231d15]">Add a todo</h2>
      <input
        ref={inputRef}
        type="text"
        name=""
        id=""
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[6px]"
      />
      <Button buttonType="primary" devMode={false}>
        Add to List
      </Button>
    </form>
  );
};

export default AddTodoForm;
