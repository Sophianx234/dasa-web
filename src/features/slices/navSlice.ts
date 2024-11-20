import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openSidebar: false,
    openChatMenu: false
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
        ,
        toggleChatMenu(state){
            state.openChatMenu = !state.openChatMenu
        }

    }

})
export const {toggleNav,toggleSidebar,toggleChatMenu} = navSlice.actions
export default navSlice.reducer