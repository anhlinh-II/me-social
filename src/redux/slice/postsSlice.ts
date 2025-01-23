import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPostsByGroup, getPostsByUser, getPostsForGroupActivities, getPostsForNewsFeed } from "../../services/PostService";
import { PostResponse } from "../../types/Post";
import { createPostLike, deletePostLike } from "../../services/LikeService";

// Fetch posts based on userId and pageNum
interface IFetchPost {
    userId: number;
    page: number;
    size: number;
}

interface IFetchPostByGroup {
    userId: number;
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
    async ({ userId, groupId, pageNum }: IFetchPostByGroup) => {
        console.log("userID >> ", userId)
        const response = await getPostsByGroup(groupId, pageNum, userId);
        console.log(response)
        return response;
    }
)

export const updatePostLike = createAsyncThunk(
    'posts/updateLike',
    async ({ userId, postId, isLiked }: { userId: number; postId: number; isLiked: boolean }) => {
        const response = isLiked
            ? await deletePostLike(userId, postId) // Call delete like API if already liked
            : await createPostLike(userId, postId); // Call create like API otherwise

        if (response.code === 1000) {
            return { postId, isLiked: !isLiked, increment: isLiked ? -1 : 1 };
        }
        throw new Error("Failed to update like");
    }
);


interface IState {
    userNewsfeedPost: PostResponse[];
    userProfilePost: PostResponse[];
    groupPostForUser: PostResponse[];
    groupPost: PostResponse[];
    isLoading: boolean;
    error: string | null;
    hasMore: boolean;
}

const initialState: IState = {
    userNewsfeedPost: [],
    groupPostForUser: [],
    userProfilePost: [],
    groupPost: [],
    isLoading: false,
    error: null,
    hasMore: true,
};

const handlePending = (state: IState) => {
    state.isLoading = true;
    state.error = null;
}

const handleReject = (state: IState, action: any) => {
    state.isLoading = false;
    state.error = action.error.message || 'Failed to fetch posts';
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updateCommentCount: (state, action: PayloadAction<{ postId: number; increment: number, type: string }>) => {
            const { postId, increment, type } = action.payload;
            let post;
            if (type === "USER_NEWSFEED") {
                post = state.userNewsfeedPost.find((p) => p.id === postId);
            }

            if (type === "GROUP_NEWSFEED") {
                post = state.groupPostForUser.find((p) => p.id === postId)
            }

            if (type === "GROUP_POST") {
                post = state.groupPost.find((p) => p.id === postId)
            }

            if (post) {
                post.commentNum += increment;
            }
        },
        updateFavoriteStatus: (state, action: PayloadAction<{ postId: number, favorite: boolean }>) => {
            const { postId, favorite } = action.payload
            const update = (posts: PostResponse[]) => {
                const post = posts.find((p) => p.id === postId);
                if (post) {
                    post.favorite = !favorite;
                }
            };

            // Update the favorite status in all relevant state fields
            update(state.userNewsfeedPost);
            update(state.userProfilePost);
            update(state.groupPostForUser);
            update(state.groupPost);
        }
    },
    extraReducers: (builder) => {
        builder
            // Case cho fetchUserNewsfeed
            .addCase(fetchUserNewsfeed.pending, handlePending)
            .addCase(fetchUserNewsfeed.fulfilled, (state: IState, action: any) => {
                state.isLoading = false;
                state.userNewsfeedPost = action.payload.result.content
                state.hasMore = action.payload.result.content.length > 0
            })
            .addCase(fetchUserNewsfeed.rejected, handleReject)

            // Case cho fetchGroupActivities
            .addCase(fetchGroupActivities.pending, handlePending)
            .addCase(fetchGroupActivities.fulfilled, (state: IState, action: any) => {
                state.isLoading = false;
                state.groupPostForUser = action.payload.result.content
                state.hasMore = action.payload.result.content.length > 0
            })
            .addCase(fetchGroupActivities.rejected, handleReject)

            .addCase(fetchPostByUser.pending, handlePending)
            .addCase(fetchPostByUser.fulfilled, (state: IState, action: any) => {
                state.isLoading = false;
                state.userProfilePost = action.payload.result.content
                state.hasMore = action.payload.result.content.length > 0
            })
            .addCase(fetchPostByUser.rejected, handleReject)

            .addCase(fetchPostByGroup.pending, handlePending)
            .addCase(fetchPostByGroup.fulfilled, (state: IState, action: any) => {
                state.isLoading = false;
                state.groupPost = action.payload.result.content
                state.hasMore = action.payload.result.content.length > 0
            })
            .addCase(fetchPostByGroup.rejected, handleReject)

            .addCase(updatePostLike.fulfilled, (state, { payload }) => {
                const updateLikeStatus = (posts: PostResponse[]) => {
                    const post = posts.find((p) => p.id === payload.postId);
                    if (post) {
                        post.liked = payload.isLiked;
                        post.likeNum += payload.increment;
                    }
                };

                // Update the like status in all relevant state fields
                updateLikeStatus(state.userNewsfeedPost);
                updateLikeStatus(state.userProfilePost);
                updateLikeStatus(state.groupPostForUser);
                updateLikeStatus(state.groupPost);
            });
    },
});


export const { updateCommentCount, updateFavoriteStatus } = postsSlice.actions;

export default postsSlice.reducer;
