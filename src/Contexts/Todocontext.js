import { useContext, createContext } from "react";

export const TodoContext = createContext({
    Todos: [
        {
            id:1,
            title: "Todao",
            completed: false
        }
    ],
    addTodo: (todo) => {},
    UpdateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider