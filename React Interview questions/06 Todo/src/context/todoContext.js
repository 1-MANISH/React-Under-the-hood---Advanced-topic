
import { createContext,useContext } from "react";

export const TodoContext = createContext({
        todos:[
                {
                        id:1,
                        todo:'Todo message',
                        completed:false,
                }
        ],
        addTodo:(todo)=>{},
        updateTodo:(id,todo)=>{},
        removeTodo:(id)=>{},
        toggleComplete:(id)=>{},
})
export const TodoContextProvider = TodoContext.Provider

export const useTodo = () => useContext(TodoContext)

