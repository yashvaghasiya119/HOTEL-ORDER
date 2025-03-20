import { createSlice } from "@reduxjs/toolkit";

const dataslice = createSlice({
    name:"data",
    initialState:{
        data:[]
    },
    reducers:{
        setdatas:(state,action)=>{
            state.data = action.payload
        },
       
    }
})
export const { setDatas, addItem, clearData } = dataslice.actions;
export default dataslice.reducer;