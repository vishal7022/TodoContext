import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./Contexts";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";

function App() {
  const [Todos, setTudo] = useState("");

  const addTodo = (todo) => {
    setTudo((prev) => [{ id: Time.now, todo }, ...prev]);
  };

  const UpdateTodo = (id, todo) => {
    setTudo((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );

    // prev.map((eachVal) => {
    //   if(eachVal.id === id){
    //     todo
    //   }else{
    //     prev
    //   }
    // })
  };

  const deleteTodo = (id) => {
    setTudo((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTudo((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    console.log(todos);

    if (todos && todos.length > 0) {
      setTudo(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [Todos]);

  return (
    <TodoProvider
      value={{ Todos, addTodo, UpdateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop and Add TodoItem here */}
            {Todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
