const TodoLoader = () => {
  return (
    <ul>
      <li className="text-center h-[50px] animate-pulse duration-1000 shadow-md bg-gradient-to-r from-amber-50 to-amber-100 w-full mt-[4px] rounded">
        Loading...
      </li>
      <li className="text-center h-[50px] animate-pulse duration-1000 shadow-md bg-gradient-to-r from-amber-50 to-amber-100 w-full mt-[4px] rounded">
        Loading...
      </li>
      <li className="text-center h-[50px] animate-pulse duration-1000 shadow-md bg-gradient-to-r from-amber-50 to-amber-100 w-full mt-[4px] rounded">
        Loading...
      </li>
    </ul>
  );
};

export default TodoLoader;
