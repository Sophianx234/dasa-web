import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLiked: false,
    isAnnex: ''
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
    }

})

export const {toggleLike,setAnnex} = userSlice.actions
export default userSlice.reducer