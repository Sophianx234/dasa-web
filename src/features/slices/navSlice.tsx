import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false
}
const navSlice = createSlice({
    name: 'navSlice',
    initialState,
    reducers: {
        toggleNav(state,action){
            state.isOpen = !state.isOpen
        }
    }

})
export default navSlice.reducer
export const {toggleNav} = navSlice.actions