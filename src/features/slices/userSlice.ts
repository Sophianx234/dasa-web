import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLiked: false
}
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        toggleLike(state){
            state.isLiked = !state.isLiked
        }
    }

})

export const {toggleLike} = userSlice.actions
export default userSlice.reducer