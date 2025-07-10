import { useCallback, useEffect, useState } from "react"
import { TodoContextProvider } from "./context/todoContext"
import { TodoForm,TodoItem } from "./components"


function App() {

        const [todos,setTodos]  =useState([])

        const addTodo = useCallback((todo) => {
                setTodos(prev=>[{id:Date.now(),...todo},...prev])
        },[])
        const updateTodo = useCallback((id,todo) => {
                setTodos(prev=>prev.map(item=>item.id===id ? todo:item))
        },[])

        const removeTodo = useCallback((id) => {
                setTodos(prev=>prev.filter(item=>item.id!==id))
        },[])

        const toggleComplete = useCallback((id) => {
                setTodos(prev=>prev.map(item=>item.id===id ? {...item,completed:!item?.completed}: item))
        },[])

        useEffect(()=>{
                const savedTodos = JSON.parse(localStorage.getItem("todos"))
                if(savedTodos && savedTodos.length>0){ 
                        setTodos(savedTodos)
                }
        },[])

        useEffect(()=>{
                localStorage.setItem("todos",JSON.stringify(todos))
        },[todos])

        return (
                <TodoContextProvider value={{todos,addTodo,updateTodo,removeTodo,toggleComplete}}>
                       <div className="bg-[#172842] min-h-screen py-8">
                                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                                <div className="mb-4">
                                        <TodoForm />
                                </div>
                                <div className="flex flex-wrap gap-y-3">
                                        {
                                                todos && todos.length > 0 && (
                                                   todos.map((todo)=>{
                                                        return (
                                                                <TodoItem 
                                                                        key={todo.id}
                                                                        todo={todo}
                                                                />
                                                        )
                                                   })
                                                )
                                        }
                                </div>
                                </div>
                        </div>
                </TodoContextProvider>
        )
}

export default App