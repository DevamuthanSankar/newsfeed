import { createSlice } from "@reduxjs/toolkit"

export const newsStore = createSlice({
    name: 'news',
    initialState: {
        value: null
    },
    reducers: {
        setNews: (state, action) => {
            const news = (state.value == null) ? [] : state.value
            state.value = news.concat(action.payload)
        }
    }
})

export const {setNews} = newsStore.actions

export default newsStore.reducer