import React, { useState } from "react";
import { useTodo } from "../Contexts/Todocontext";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add= (e) => {
    e.preventdefault()

    if(!todo) return

    addTodo({todo, completed: false})
    setTodo("")
  }

  return (
    <div>
      <div className="w-full h-full flex text-center justify-center">
        <form onSubmit={add} className="flex w-2/4">
          <input
            type="text"
            placeholder="Write Todo"
            className="px-4 py-2 w-full text-black/70 border-black/100 rounded-l-lg outline-none bg-white/100"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            className="w-28 px-1 py-2 bg-emerald-700 rounded-r-lg text-red-50 font-bold"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
