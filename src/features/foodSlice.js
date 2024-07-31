import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data:[],
    searchflag: false,
    menuflag: true,
}

export const foodSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        handleFlag: (state,action)=>{
            state.searchflag=true
        },
        handleMenuFlag:(state,action)=>{
            state.menuflag=!action.payload
        },
    }

})

export const {handleFlag,handleMenuFlag} = foodSlice.actions;
export default foodSlice.reducer;

