import {createSlice} from "@reduxjs/toolkit";

export const favoriteStore = createSlice({
    name: 'favorite',
    initialState: {
        favorites: {
            news: [],
            newsId: []
        }
    },
    reducers: {
        setFavorite: (state, action) => {
            state.favorites.news.push(action.payload);
            state.favorites.newsId.push(action.payload._id);
        },
        removeFavorite: (state, action) => {
            state.favorites.news = state.favorites.news.filter( news => news._id !== action.payload._id);
            state.favorites.newsId = state.favorites.newsId.filter( id => id !== action.payload._id);
        }
    }
})

export const {setFavorite, removeFavorite} = favoriteStore.actions

export default favoriteStore.reducer;