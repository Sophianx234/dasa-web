import { createSlice } from "@reduxjs/toolkit";
export type initialStateProp = {
    isLiked: boolean,
    isAnnex: string,
    anonymousMessages: Array<string|null>
}
const initialState: initialStateProp = {
    isLiked: false,
    isAnnex: '',
    anonymousMessages: []
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleLike(state){
            state.isLiked = !state.isLiked
        },
        setAnnex(state,action){
            state.isAnnex = action.payload
        },
        sendMessage(state,action){
            state.anonymousMessages.push(action.payload)
        },
    }

})

export const {toggleLike,setAnnex,sendMessage} = userSlice.actions
export default userSlice.reducer