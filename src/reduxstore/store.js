import { configureStore } from "@reduxjs/toolkit"
import firstdata from "./dataslice"
export const store = configureStore({
    reducer:{
        first:firstdata
    }
})