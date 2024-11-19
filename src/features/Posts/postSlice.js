import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async ({ subreddit, searchTerm }) => {

        const searchEndpoint = searchTerm
        ? `https://www.reddit.com/r/${subreddit}/search.json?q=${searchTerm}&restrict_sr=true`
        : `https://www.reddit.com/r/${subreddit}/top.json`; 

        const response = await fetch(searchEndpoint);

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        return data.data.children.map((post) => post.data);
    }
);

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

export default postSlice.reducer;

