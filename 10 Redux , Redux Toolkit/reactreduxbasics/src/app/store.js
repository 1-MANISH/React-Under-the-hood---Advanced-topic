
import {configureStore} from "@reduxjs/toolkit"
import todoSlice from "../features/todo/todoSlice"

export const store = configureStore({
        reducer:{
                // [todoSlice.name]:todoSlice.reducer // if we passed todoSlice directly
                todoReducer:todoSlice
        }
})