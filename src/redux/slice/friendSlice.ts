import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSuggestedFriends } from '../../services/UserService';
import { UserDTO } from '../../types/User';
import { getFriendRequestByUser, getUserFriends, sendFriendRequest } from '../../services/FriendshipService';
import { FriendshipResponse } from '../../types/Friendship';

interface IFetchSuggestedFriend {
     userId: number;
     page: number;
     size: number;
}

export const fetchSuggestedFriend = createAsyncThunk(
     'friend/fetchSuggestedFriend',
     async ({ userId, page, size }: IFetchSuggestedFriend) => {
          const response = await getSuggestedFriends(userId, page, size );
          return response;
     }
)

interface IHandleSendFriendRequest {
     requesterId: number;
     receiverId: number;
}

export const handleSendFriendRequest = createAsyncThunk(
     'friend/handleSendFriendRequest',
     async ({ requesterId, receiverId }: IHandleSendFriendRequest) => {
          const response = await sendFriendRequest(requesterId, receiverId)
          return response;
     }
)

interface IFetchFriendRequestByUser {
     userId: number;
     page: number;
     size: number;
}

export const fetchFriendRequestByUser = createAsyncThunk(
     'friend/fetchFriendRequestByUser',
     async ({userId, page, size}: IFetchFriendRequestByUser) => {
          const response = await getFriendRequestByUser(userId, page, size)
          return response;
     }
)

interface IFetchFriendByUser {
     userId: number;
     page: number;
     size: number;
}

export const fetchFriendByUser = createAsyncThunk(
     'friend/fetchFriendByUser',
     async ({userId, page, size}: IFetchFriendByUser) => {
          const response = await getUserFriends(userId, page, size);
          return response;
     }
)

interface IState {
     isLoading: boolean;
     error: null | string;
     suggestedFriend: UserDTO[];
     friendRequest: FriendshipResponse[];
     friends: FriendshipResponse[]
}

const initialState: IState = {
     isLoading: true,
     error: null,
     suggestedFriend: [],
     friendRequest: [],
     friends: []
};

const handlePending = (state: IState, action: any) => {
     state.isLoading = true;
     state.error = null;
}

const handleRejected = (state: IState, action: any) => {
     state.isLoading = false;
     state.error = action.error.message || 'Failed to fetch friends api';
}

export const friendSlice = createSlice({
     name: 'friend',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          // fetchSuggestedFriend
          builder.addCase(fetchSuggestedFriend.pending, handlePending)
          builder.addCase(fetchSuggestedFriend.fulfilled, (state: IState, action: any) => {
               state.suggestedFriend = action.payload.result.content
               state.isLoading = false
          })
          builder.addCase(fetchSuggestedFriend.rejected, handleRejected)

          // handleSendFriendRequest
          builder.addCase(handleSendFriendRequest.pending, handlePending)
          builder.addCase(handleSendFriendRequest.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.error = null;
          })
          builder.addCase(handleSendFriendRequest.rejected, handleRejected)

          // fetchFriendRequestByUser
          builder.addCase(fetchFriendRequestByUser.pending, handlePending)
          builder.addCase(fetchFriendRequestByUser.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.friendRequest = action.payload.result.content;
               state.error = null
          })
          builder.addCase(fetchFriendRequestByUser.rejected, handleRejected)

          // fetchFriendForUser
          builder.addCase(fetchFriendByUser.pending, handlePending)
          builder.addCase(fetchFriendByUser.fulfilled, (state: IState, action: any) => {
               state.friends = action.payload.result.content
               state.isLoading = false;
               state.error = null;
          })
     },

});

export const {

} = friendSlice.actions;

export default friendSlice.reducer;
