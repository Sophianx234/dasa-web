import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    openSidebar: false,
    openChatMenu: false,
    isOpenChangePassword:false,
    showChangeContact: false,
    revealConfirmModal: false,
    revealReportIssue: false,
    revealFaq :false,
    revealUploadProfile: false,
    isOpenUploadProduct: false
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
        },
        toggleRevealConfirmModal(state){
            state.revealConfirmModal = !state.revealConfirmModal
        }
        ,
        toggleRevealReportIssue(state){
            state.revealReportIssue = !state.revealReportIssue
        }
        ,
        toggleRevealFaq(state){
            state.revealFaq = !state.revealFaq
        }
        ,
        toggleRevealUploadImage(state){
            state.revealUploadProfile = !state.revealUploadProfile
        }
        ,
        toggleRevealUploadProduct(state){
            state.isOpenUploadProduct = !state.isOpenUploadProduct
        }

    }

})
export const {toggleNav,toggleSidebar,toggleChatMenu,toggleChangePassword,toggleChangeContact,toggleRevealConfirmModal,toggleRevealFaq,toggleRevealReportIssue, toggleRevealUploadImage,toggleRevealUploadProduct} = navSlice.actions
export default navSlice.reducer