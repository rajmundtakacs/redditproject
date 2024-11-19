import { configureStore } from '@reduxjs/toolkit';
import postReducer from './features/Posts/postSlice.js';
import commentsReducer from './features/Comments/commentsSlice.js';

const store = configureStore({
    reducer: {
        posts: postReducer,
        comments: commentsReducer,
    }
});

export default store;

