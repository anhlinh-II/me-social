import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsByUser, getPostsForGroupActivities } from "../../services/PostService";
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

// APIs

export const fetchUserNewsfeed = createAsyncThunk(
    'posts/fetchUserNewsfeed',
    async ({ userId, pageNum }: fetchUserNewsfeed) => {
        const response = await getPostsByUser(userId, pageNum);
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

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserNewsfeed.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchUserNewsfeed.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.result?.content ?? []; 
        });

        builder.addCase(fetchUserNewsfeed.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to fetch posts';
        });
    }
});

export const {} = postsSlice.actions;

export default postsSlice.reducer;
