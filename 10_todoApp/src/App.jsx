import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoFrom";
import TodosItem from "./components/TodosItem";


function App() {
  const [todos, setTodos] = useState([]);

  // ADD TODO METHOD
  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo]);
  };

  // UPDATE TODO
  const updateTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((prev) => (prev.id === id ? todo : prev)));
  }

  // DELETE TODO
  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  }

  // TOOGLECOMPLETE METHOD
  const toggleComplete = (id) => {
    setTodos((prevTodo) => prevTodo.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  // GET TODOS FROM LOCALSTORAGE
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  // SET TODOS FROM LOCALSTORAGE
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodosItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>

  )
}

export default App;