import { createSlice } from "@reduxjs/toolkit";

export const refreshStore = createSlice( {
    name: 'refresh',
    initialState: {
        refreshed: false
    },
    reducers: {
        setRefresh: ( state, action ) => {
            state.refreshed = action.payload
        }
    }
} )

export const { setRefresh } = refreshStore.actions

export default refreshStore.reducer