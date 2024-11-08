import { configureStore } from "@reduxjs/toolkit";
import navSlice from './src/features/slices/navSlice'
const store = configureStore({
    reducer:{
    nav: navSlice
    }

})

export default store