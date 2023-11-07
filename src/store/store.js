import { configureStore } from "@reduxjs/toolkit";
import datosSlice from '../features/datosSlice'


export const store = configureStore({
    reducer:{
        datos : datosSlice,

    }
})

