import { signupCredentialsExtended, userType } from "@/services/apiServices";
import { createSlice } from "@reduxjs/toolkit";
import { genRandomName } from "../utils/helpers";

const initialState = {
  openEmojiMart: false,
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
  images: [],
  numMedia: 1,
  isLoading: false,
  user: {},
  isOpenAttachFile: false,
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
    toggleOpenEmojiMart(state) {
      state.openEmojiMart = !state.openEmojiMart;
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
    setIsLoading(state, action) {
      state.isLoading = action.payload;
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
    setIsOpenAttachFile(state, action) {
      state.isOpenAttachFile = action.payload;
    },
    toggleIsOpenAttachFile(state) {
      state.isOpenAttachFile = !state.isOpenAttachFile;
    },
    increasePageNumber(state) {
      state.page = state.page + 1;
    },
    setNumMedia(state, action) {
      state.numMedia = action.payload;
    },
    resetPageNumber(state) {
      state.page = 1;
    },
    resetNumMedia(state) {
      state.numMedia = 1;
    },
    setImages(state, action) {
      state.images = action.payload;
    },
    setEmojiMart(state, action) {
      state.openEmojiMart = action.payload;
    },

    setUser(state, action) {
      state.user = {
        ...(action?.payload as signupCredentialsExtended),
        anonymousName: genRandomName(),
      };
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
  increasePageNumber,
  setImages,
  resetPageNumber,
  setNumMedia,
  resetNumMedia,
  setIsLoading,
  setUser,
  toggleOpenEmojiMart,
  setEmojiMart,
  toggleIsOpenAttachFile,
  setIsOpenAttachFile,
} = navSlice.actions;
export default navSlice.reducer;
