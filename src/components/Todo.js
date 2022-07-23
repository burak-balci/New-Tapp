import { useTodos } from "../context/TodosContext";
import { v4 as uuid } from "uuid";
import { useEffect } from "react";
import { useSettings } from "../context/SettingsContext";

function Todo() {
  const { todos, setTodos, todo, setTodo, isChecked } = useTodos();
  const { theme } = useSettings();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length & (todo !== "")) {
      if (todos) {
        setTodos([{ todo, isChecked, id: uuid() }, ...todos]);
      } else {
        setTodos([{ todo, isChecked, id: uuid() }]);
      }
      setTodo("");
    }
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  const handleChange = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isChecked: !todo.isChecked };
        }
        return item;
      })
    );
    localStorage.setItem("todos", todos);
  };

  const deleteTodo = (todo) => {
    if (todos.includes(todo)) {
      setTodos(todos.filter((item) => item.id !== todo.id));
    }
  };

  return (
    <>
      <div className="p-2 my-10 ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col divide-y-2 divide-gray-400 border-4 border-emerald-300 rounded-md">
            <textarea
              className={`border-none p-1 focus:ring-0 mr-5 rounded-sm ${theme} text-white  flex w-full  resize-none h-32`}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              placeholder="Enter todo..."
            />
            <button
              className={`flex p-1 justify-center rounded-sm ${theme} text-white border-gray-700`}
              type="submit"
            >
              Add Todo
            </button>
          </div>
        </form>
      </div>
      <div>
        {todos &&
          todos.map((todo) => (
            <div
              className={`text-lg rounded-sm ${theme} text-white  m-2 mb-0 p-2 break-all flex justify-between items-center border-4 border-emerald-300 rounded-md`}
              key={todo.id}
            >
              <p
                className={`${
                  todo.isChecked && "line-through text-gray-300"
                } w-full mx-2 mb-1 font-lato font-bold`}
              >
                {todo.todo}
              </p>
              <input
                className="bg-white rounded-sm mr-2 h-8 w-8 text-green-500 border-none focus:ring-0 focus:outline-none"
                type="checkbox"
                checked={todo.isChecked}
                onChange={() => handleChange(todo)}
              />
              <div>{todo.isChecked}</div>
              <button
                onClick={() => deleteTodo(todo)}
                className="flex text-gray-100 px-2 items-center bg-red-600 w-8 h-8 font-bold hover:text-red-500 hover:bg-gray-100 p-1 rounded-sm"
              >
                X
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo;
