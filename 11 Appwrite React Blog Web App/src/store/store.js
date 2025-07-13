import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./slices/authSlice"

const store = configureStore({
        reducer:{
                authReducer:authSlice,
                // TODO : 
        }
})

export default store