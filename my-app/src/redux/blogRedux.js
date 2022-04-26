 import { createSlice } from "@reduxjs/toolkit";

 const blogSlice = createSlice({
 	name: "blog",
 	initialState: {
 		blog: [],
 		isFetching: false,
 		error: false,
 	},
 	reducers: {
 		getblogStart: (state) => {
             state.isFetching =true
         },
         getblogSuccess: (state, action)=>{
             state.isFetching= false
             state.blog= action.payload
         },
         getblogFaliure: (state)=>{
             state.isFetching= false
             state.error =true
         }
 	},
 });

 export const {getblogStart, getblogSuccess, getblogFaliure}=blogSlice.actions
 export default blogSlice.reducer



