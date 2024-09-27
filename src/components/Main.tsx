import Header from "./Header";
import Section from "./Section";
import TodoList from "./TodoList";

const Main = () => {
  return (
    <main
      className="relative w-[900px] h-[636px] bg-white rounded-[2%] shadow-[0_4px_4x_rgba(0,0,0,0.08)]
      grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]
      overflow-hidden"
    >
      <Header />
      <TodoList />
      <Section />
    </main>
  );
};

export default Main;
