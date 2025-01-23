import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  openSidebar: false,
  openChatMenuOptions: false,
  isOpenChangePassword: false,
  showChangeContact: false,
  revealConfirmModal: false,
  revealReportIssue: false,
  revealFaq: false,
  revealUploadProfile: false,
  isOpenUploadProduct: false,
  renameImage: false,
  revealUplaoadUserImage: false,
  isAuthenticated: false,
  showToaster: false,
  page: 1,
  images:[],
  numMedia: 1
};
const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleNav(state) {
      state.isOpen = !state.isOpen;
    },
    toggleSidebar(state) {
      state.openSidebar = !state.openSidebar;
    },
    toggleChatMenu(state) {
      state.openChatMenuOptions = !state.openChatMenuOptions;
    },
    toggleChangePassword(state) {
      state.isOpenChangePassword = !state.isOpenChangePassword;
    },
    toggleChangeContact(state) {
      state.showChangeContact = !state.showChangeContact;
    },
    toggleRevealConfirmModal(state) {
      state.revealConfirmModal = !state.revealConfirmModal;
    },
    toggleRevealReportIssue(state) {
      state.revealReportIssue = !state.revealReportIssue;
    },
    toggleRevealFaq(state) {
      state.revealFaq = !state.revealFaq;
    },
    toggleRevealUploadImage(state) {
      state.revealUploadProfile = !state.revealUploadProfile;
    },
    toggleRevealUploadProduct(state) {
      state.isOpenUploadProduct = !state.isOpenUploadProduct;
    },
    toggleRenameImage(state) {
      state.renameImage = !state.renameImage;
    },
    toggleRevealUplaoadUserImage(state) {
      state.revealUplaoadUserImage = !state.revealUplaoadUserImage;
    },
    toggleIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
    toggleShowToaster(state) {
      state.showToaster = !state.showToaster;
    },
    increasePageNumber(state) {
      state.page = state.page +1;
    },
    setNumMedia(state,action) {
      state.numMedia = action.payload;
    },
    resetPageNumber(state) {
      state.page = 0;
    },
    resetNumMedia(state) {
      state.numMedia = 0;
    },
    setImages(state,action) {
      state.images = action.payload;
    },
  },
});
export const {
  toggleShowToaster,
  toggleNav,
  toggleSidebar,
  toggleChatMenu,
  toggleChangePassword,
  toggleChangeContact,
  toggleRevealConfirmModal,
  toggleRevealFaq,
  toggleRevealReportIssue,
  toggleRevealUploadImage,
  toggleRevealUploadProduct,
  toggleRenameImage,
  toggleRevealUplaoadUserImage,
  toggleIsAuthenticated,
  increasePageNumber,setImages,
  resetPageNumber,
  setNumMedia,
  resetNumMedia
} = navSlice.actions;
export default navSlice.reducer;
