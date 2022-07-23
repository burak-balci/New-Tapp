import { createContext, useContext, useState, useEffect } from "react";

const TodosContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const allTodos = {
    todos,
    setTodos,
    todo,
    setTodo,
    isChecked,
    setIsChecked,
  };

  return (
    <TodosContext.Provider value={allTodos}>{children}</TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext);
