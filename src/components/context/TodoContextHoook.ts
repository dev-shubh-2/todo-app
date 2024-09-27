import { useContext } from "react";
import { TodosContext } from "./TodosContextProvider";

//Reason for creating this custom hook is to do one level of filter(null checking)
//Not just that now we have centralized our context fetching logic - Which can be access across components.
const useTodoContextHook = () => {
    const context = useContext(TodosContext);
    if (!context) {
      throw new Error("Forget to add provider for Todo Context.");
    }
    //This place it is guranteed context cant be null.
    return context;
}

export default useTodoContextHook;
