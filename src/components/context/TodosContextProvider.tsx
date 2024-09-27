import { createContext, useEffect, useState } from "react";
import TODO from "../TodoInterface";

type TTodosContext = {
  todos: TODO[];
  todosAvailable: boolean;
  totalTodoCount: number;
  completedTodoCount: number;
  onTodocompletion: (id: Number) => void;
  deleteTodo: (
    event: {
      stopPropagation: () => void;
    },
    id: string | number
  ) => void;
  addTodo: (text: string) => void;
};
const initialTodos: TODO[] = [];
export const TodosContext = createContext<TTodosContext | null>(null);

type TodoContextProviderProps = {
  children: React.ReactNode;
};

const TodosContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todos, setTodos] = useState(initialTodos);
  const [todosAvailable, setTodosAvailable] = useState(true);
  const totalTodoCount = todos.length;
  const completedTodoCount = todos.filter((t) => t.iscompleted).length;
  function onTodocompletion(id: Number) {
    const updatedTodo = todos.map((t) => {
      if (t.id === id) {
        return { ...t, iscompleted: !t.iscompleted };
      }
      return t; // to return items not impacted
    });
    setTodos(updatedTodo);
  }

  function deleteTodo(
    event: { stopPropagation: () => void },
    id: string | number
  ) {
    setTodos(todos.filter((t) => !(t.iscompleted && t.id === id)));
    event.stopPropagation();
  }

  function addTodo(text: string) {
    const updatedTodos = [
      ...todos,
      {
        id: todos.length + 1,
        text: text,
        iscompleted: false,
      },
    ];
    setTodos(updatedTodos);
  }

  //API call to fetch todos list
  //useEffect to handle side-effects like below fetch API call
  //Note : useEffect takes time to execute. First the component(HTML part) will render & then you will have data.
  //This can cause problem in scenario where we have to quickly render the data to user. However the API call takes time to return the response.
  //To overcome this problem - we can make use of Loading/Buffering kind of experience. To intimate user that something will be render soon.
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/api/todos"
        );
        const data = await response.json();
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.error("Unable to fetch Todos.");
        setTodosAvailable(false);
      }
    };
    const timerId = setTimeout(() => {
      fetchTodos();
    }, 3000); // to simulate delay

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  return (
    <TodosContext.Provider
      value={{
        todos,
        todosAvailable,
        totalTodoCount,
        completedTodoCount,
        onTodocompletion,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
