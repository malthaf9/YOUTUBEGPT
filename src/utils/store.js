import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';

const store = configureStore({
    reducer: {
        // here app is name from appSlice
        app: appSlice,
        search: searchSlice,
        chat: chatSlice
    }
})

export default store;