import {createSlice} from "@reduxjs/toolkit";

const tabNavStore = createSlice({
    name: 'tabNav',
    initialState: {
        tabVisible: true
    },
    reducers: {
        setTabVisible: (state) => {
            state.tabVisible = true;
        },
        setTabInvisible: (state) => {
            state.tabVisible = false
        }
    }
})

export const {setTabVisible, setTabInvisible} = tabNavStore.actions;

export default tabNavStore.reducer;