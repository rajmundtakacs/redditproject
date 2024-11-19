import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchComments = createAsyncThunk(
    "comments/fetchComments",
    async (postId) => {
        const response = await fetch(`https://www.reddit.com/comments/${postId}.json`);
        if(!response.ok) {
            throw new Error('Failed to fetch comments');
        }
        const data = await response.json();
        return data[1].data.children.map((comment) => comment.data);
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },

});

export default commentsSlice.reducer;
