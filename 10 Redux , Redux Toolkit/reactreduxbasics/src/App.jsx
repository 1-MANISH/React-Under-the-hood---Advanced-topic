import { useSelector } from "react-redux";
import { TodoForm, TodoItem } from "./components";
import { useEffect } from "react";

function App() {

        const {todos} = useSelector((store)=>store.todoReducer)

        useEffect(()=>{
                if(todos && todos?.length>0)
                        localStorage.setItem("todos",JSON.stringify(todos))
        },[todos])

        return (
                <div className="bg-[#172842] min-h-screen py-8">
                        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                                <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                                Manage Your Todos
                                </h1>
                                <div className="mb-4">
                                        <TodoForm />
                                </div>
                                <div className="flex flex-wrap gap-y-3">
                                        {
                                                todos && todos?.length > 0 && (
                                                        todos.map((todo)=>{
                                                                return (
                                                                        <TodoItem key={todo?.id} todo={todo} />
                                                                )
                                                        })
                                                )
                                        }
                                </div>
                        </div>
                </div>
        );
}

export default App;
