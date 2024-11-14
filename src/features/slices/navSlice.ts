import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openSidebar: false
}
const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav(state){
            state.isOpen = !state.isOpen
        },
        toggleSidebar(state){
            state.openSidebar = !state.openSidebar
        }

    }

})
export const {toggleNav,toggleSidebar} = navSlice.actions
export default navSlice.reducer