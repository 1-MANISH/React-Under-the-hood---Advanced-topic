
import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState ={
        todos:JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")):[]
}

const todoSlice = createSlice({
        name:"todoSlice",
        initialState:initialState,
        reducers:{
                addTodo:(state,action)=>{ // dispatch(addTodo(text))
                        state.todos.push({
                                id:nanoid(),
                                text:action.payload,
                                completed:false
                        })
                },
                removeTodo:(state,action)=>{// dispatch(removeTodo(id))
                        state.todos = state.todos.filter(todo=>todo.id !== action.payload)
                },
                updateTodo:(state,action)=>{ // dispatch(updateTodo({id,text}))
                        state.todos = state.todos.map(todo=>todo.id ===action.payload.id ? {...todo,text:action.payload.text}:todo)
                },
                toggleTodo:(state,action)=>{ // dispatch(toggleTodo(id))
                        state.todos = state.todos.map(todo=>todo.id === action.payload ? {...todo,completed:!todo.completed}:todo)
                },
        }
})

export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions

export default todoSlice.reducer // reducer function for whole slide

