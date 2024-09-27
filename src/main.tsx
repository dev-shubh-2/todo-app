import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";
import "./index.css";
import TodosContextProvider from "./components/context/TodosContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  //In development mode React render 2 times. Reason behind that is below Strictmode - Strictmode helps us looking for some semantic or conventional issues in our code. Worry not! once it is build and package, this strict mode will be removed. So in production you wont face this kind of issue.
  <StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>
);
