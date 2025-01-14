import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByGroup, getPostsByUser, getPostsForGroupActivities, getPostsForNewsFeed } from "../../services/PostService";
import { PostResponse } from "../../types/Post";

// Fetch posts based on userId and pageNum
interface IFetchPost {
    userId: number;
    page: number;
    size: number;
}

interface IFetchPostByGroup {
    groupId: number;
    pageNum: number;
}

// APIs

export const fetchUserNewsfeed = createAsyncThunk(
    'posts/fetchUserNewsfeed',
    async ({ userId, page, size }: IFetchPost) => {
        const response = await getPostsForNewsFeed(userId, page, size);
        return response;
    }
)

export const fetchGroupActivities = createAsyncThunk(
    'posts/fetchGroupActivities',
    async ({ userId, page, size }: IFetchPost) => {
        const response = await getPostsForGroupActivities(userId, page, size);
        return response;
    }
)

export const fetchPostByUser = createAsyncThunk(
    'posts/fetchPostByUser',
    async ({ userId, page, size }: IFetchPost) => {
        const response = await getPostsByUser(userId, page, size);
        console.log(response)
        return response;
    }
)

export const fetchPostByGroup = createAsyncThunk(
    'posts/fetchPostByGroup',
    async ({ groupId, pageNum }: IFetchPostByGroup) => {
        const response = await getPostsByGroup(groupId, pageNum);
        console.log(response)
        return response;
    }
)

interface IState {
    posts: PostResponse[];
    isLoading: boolean;
    error: string | null;
    hasMore: boolean;
}

const initialState: IState = {
    posts: [],
    isLoading: false,
    error: null,
    hasMore: true,
};

const handlePending = (state: IState) => {
    state.isLoading = true;
    state.error = null;
}

const handleFullfiled = (state: IState, action: any) => {
    state.isLoading = false;
    state.posts = [...state.posts, ...action.payload.result.content]
    console.log("post saved to redux")
    state.hasMore = action.payload.result.content.length > 0
    console.log("hasMore >> ", state.hasMore)
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

            .addCase(fetchPostByGroup.pending, handlePending)
            .addCase(fetchPostByGroup.fulfilled, handleFullfiled)
            .addCase(fetchPostByGroup.rejected, handleReject)
    },
});


export const { } = postsSlice.actions;

export default postsSlice.reducer;
