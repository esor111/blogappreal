/** @format */

 /** @format */

 import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
 	name: "user",
 	initialState: {
 		currentUser: null,
 		isFetching: false,
 		error: false,
 	},
 	reducers: {
 		loginStart: (state) => {
             state.isFetching =true
         },
         loginSuccess: (state, action)=>{
             state.isFetching= false
             state.currentUser= action.payload
         },
         loginfaliure: (state)=>{
             state.isFetching= false
             state.error =true
         },

         logOut: (state)=>{
            state.currentUser= []
        }
 	},
 });

 export const {loginStart, loginSuccess, loginfaliure, logOut}=userSlice.actions
 export default userSlice.reducer


