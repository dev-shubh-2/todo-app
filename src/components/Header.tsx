import Logo from "./Logo";
import TodoStatus from "./TodoStatus";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[.08]">
      <Logo />
      <TodoStatus />
    </header>
  );
};

export default Header;
