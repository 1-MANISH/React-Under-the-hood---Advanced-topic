import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        status:false,
        userData:null
};

const authSlice =createSlice({
        name:"authSlice",
        initialState,
        reducers:{

                login:(state,action)=>{
                        state.status = true
                        state.userData = action.payload.userData
                },
                logout:(state)=>{
                        state.status = false
                        state.userData = null
                }

        },
        // extraReducers:(builder)=>{
        //         builder.addCase("authSlice/login",(state,action)=>{})
        // }
})

export const {login,logout} = authSlice.actions

export default authSlice.reducer