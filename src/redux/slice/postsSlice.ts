import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByUser, getPostsForGroupActivities, getPostsForNewsFeed } from "../../services/PostService";
import { PostResponse } from "../../types/Post";

// Fetch posts based on userId and pageNum
interface fetchUserNewsfeed {
    userId: number;
    pageNum: number;
}

interface IFetchGroupActivities {
    userId: number;
    pageNum: number;
}

interface IFetchPostByUser {
    userId: number;
    pageNum: number;
}

// APIs

export const fetchUserNewsfeed = createAsyncThunk(
    'posts/fetchUserNewsfeed',
    async ({ userId, pageNum }: fetchUserNewsfeed) => {
        const response = await getPostsForNewsFeed(userId, pageNum);
        console.log(response)
        return response; // Assuming the response is an object with a 'data' key containing posts
    }
)

export const fetchGroupActivities = createAsyncThunk(
    'posts/fetchGroupActivities',
    async ({ userId, pageNum }: IFetchGroupActivities) => {
        const response = await getPostsForGroupActivities(userId, pageNum);
        console.log(response)
        return response; // Assuming the response is an object with a 'data' key containing posts
    }
)

export const fetchPostByUser = createAsyncThunk(
    'posts/fetchPostByUser',
    async ({ userId, pageNum }: IFetchPostByUser) => {
        const response = await getPostsByUser(userId, pageNum);
        console.log(response)
        return response; // Assuming the response is an object with a 'data' key containing posts
    }
)

interface IState {
    posts: PostResponse[];
    isLoading: boolean;
    error: string | null;
}

const initialState: IState = {
    posts: [],
    isLoading: false,
    error: null
};

const handlePending = (state: IState) => {
    state.isLoading = true;
    state.error = null;
}

const handleFullfiled = (state: IState, action: any) => {
    state.isLoading = false;
    state.posts = action.payload.result?.content ?? [];
}

const handleReject = (state: IState, action: any) => {
    state.isLoading = false;
    state.error = action.error.message || 'Failed to fetch posts';
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Case cho fetchUserNewsfeed
            .addCase(fetchUserNewsfeed.pending, handlePending)
            .addCase(fetchUserNewsfeed.fulfilled, handleFullfiled)
            .addCase(fetchUserNewsfeed.rejected, handleReject)

            // Case cho fetchGroupActivities
            .addCase(fetchGroupActivities.pending, handlePending)
            .addCase(fetchGroupActivities.fulfilled, handleFullfiled)
            .addCase(fetchGroupActivities.rejected, handleReject)

            .addCase(fetchPostByUser.pending, handlePending)
            .addCase(fetchPostByUser.fulfilled, handleFullfiled)
            .addCase(fetchPostByUser.rejected, handleReject)
    },
});


export const { } = postsSlice.actions;

export default postsSlice.reducer;
