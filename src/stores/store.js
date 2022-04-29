import { combineReducers, configureStore} from '@reduxjs/toolkit'
import newsReducer from "./newsStore";
import refreshReducer from "./refreshStore"
import favoriteReducer from "./favoriteStore";
import tabNavReducer from "./tabNavStore"
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const favoritePersistedReducer = persistReducer(persistConfig, favoriteReducer);
const newsPersistedReducer = persistReducer(persistConfig, newsReducer);


export const store = configureStore({
    reducer: {
        news: newsPersistedReducer,
        refresh: refreshReducer,
        favorite: favoritePersistedReducer,
        tabNav: tabNavReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})