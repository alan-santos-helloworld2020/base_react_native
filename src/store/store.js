import { configureStore } from "@reduxjs/toolkit";
import slice from '../slices/slice'

export  default configureStore({
    reducer:{
        cliente: slice

    }
})