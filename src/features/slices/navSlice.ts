import { mediaType, signupCredentialsExtended } from "@/services/apiServices";
import { createSlice } from "@reduxjs/toolkit";

export type onlineUsersType = {
  userId: string;
  userName: string;
  isOnline: boolean;
};
interface navState {
  selectFilter: 'images'|'videos',
  typingUsers: signupCredentialsExtended[];
  isTyping: boolean;
  onlineUsers: onlineUsersType[];
  openEmojiMart: boolean;
  isOpen: boolean;
  openSidebar: boolean;
  openChatMenuOptions: boolean;
  isOpenChangePassword: boolean;
  showChangeContact: boolean;
  revealConfirmModal: boolean;
  revealReportIssue: boolean;
  revealFaq: boolean;
  revealUploadProfile: boolean;
  isOpenUploadProduct: boolean;
  renameImage: boolean;
  revealUplaoadUserImage: boolean;
  isAuthenticated: boolean;
  showToaster: boolean;
  page: number;
  dateArr:string[],
revealEventScheduler: boolean;
  images: mediaType[];
  numMedia: number;
  isLoading: boolean;
  user: signupCredentialsExtended | object;
  isOpenAttachFile: boolean;
  isLoggedIn:boolean;
  uploadVideo: boolean
}
const initialState: navState = {
  selectFilter: 'images',
  typingUsers: [],
  dateArr:[],
  uploadVideo:false,
  onlineUsers: [],
  isLoggedIn: false,
  isTyping: false,
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
  revealEventScheduler:false,
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
    toggleUploadVideo(state) {
      state.uploadVideo = !state.uploadVideo;
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
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    
    setSelectFilter(state, action) {
      state.selectFilter = action.payload;
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
    setDateArr(state, action) {
      const dateExist = state.dateArr.find(date=>date===action.payload)
      if(!dateExist) state.dateArr.push(action.payload)
    },
    toggleIsOpenAttachFile(state) {
      state.isOpenAttachFile = !state.isOpenAttachFile;
    },
    toggleRevealEventScheduler(state) {
      state.revealEventScheduler = !state.revealEventScheduler;
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
    
    setOnlineUsers(state, action) {
      const onlineUser =  action.payload as  onlineUsersType
      if(!state.onlineUsers.some(user=>user.userId === onlineUser.userId)){
        state.onlineUsers.push(action.payload);

      }
    },
    setUserIsTyping(state, action) {
      state.isTyping = action.payload;
    },
    setEmojiMart(state, action) {
      state.openEmojiMart = action.payload;
    },
    removeOnlineUser(state, action) {
      const OfflineUser = action.payload as onlineUsersType
      state.onlineUsers = state.onlineUsers.filter(user=>user.userId !== OfflineUser.userId )

    },
    removeTypingUser(state, action) {
      console.log('typingUsers',setTypingUsers)
      state.typingUsers = state.typingUsers.filter(
        (user) => user._id !== action.payload
      );
    },
    setTypingUsers(state, action) {
      console.log("state", JSON.parse(JSON.stringify(state.typingUsers)));
      const typist = action.payload as signupCredentialsExtended
      if (!state.typingUsers.some((user) => user._id === typist._id)) {
        console.log("action.payload", action.payload);
        state.typingUsers.push(action.payload);
      }
    },

    setUser(state, action) {
      state.user = {
        ...(action?.payload as signupCredentialsExtended),
        
      };
    },
  },
});
export const {
  toggleShowToaster,
  toggleNav,
  toggleUploadVideo,
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
  setUserIsTyping,
  setTypingUsers,
  removeTypingUser,
  setOnlineUsers,
  removeOnlineUser,
  setIsLoggedIn,
  setDateArr,
  setSelectFilter,
  toggleRevealEventScheduler
} = navSlice.actions;
export default navSlice.reducer;
