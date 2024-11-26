import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openSidebar: false,
    openChatMenu: false,
    isOpenChangePassword:false,
    showChangeContact: false
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
        ,
        toggleChangePassword(state){
            state.isOpenChangePassword = !state.isOpenChangePassword
        },
        toggleChangeContact(state){
            state.showChangeContact = !state.showChangeContact
        }

    }

})
export const {toggleNav,toggleSidebar,toggleChatMenu,toggleChangePassword,toggleChangeContact} = navSlice.actions
export default navSlice.reducer