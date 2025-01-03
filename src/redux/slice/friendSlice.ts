import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSuggestedFriends } from '../../services/UserService';
import { UserDTO } from '../../types/User';
import { sendFriendRequest } from '../../services/FriendshipService';

interface IFetchSuggestedFriend {
     userId: number;
     pageNum: number;
}

export const fetchSuggestedFriend = createAsyncThunk(
     'friend/fetchSuggestedFriend',
     async ({userId, pageNum}: IFetchSuggestedFriend) => {
          const response = await getSuggestedFriends(userId, pageNum);
          return response;
     }
)

interface IHandleSendFriendRequest {
     requesterId: number;
     receiverId: number;
}

export const handleSendFriendRequest = createAsyncThunk(
     'friend/handleSendFriendRequest',
     async({requesterId, receiverId}: IHandleSendFriendRequest) => {
          const response = await sendFriendRequest(requesterId, receiverId)
          return response;
     }
)

interface IState {
     isLoading: boolean;
     error: null | string;
     suggestedFriend: UserDTO[];
}

const initialState: IState = {
     isLoading: true,
     error: null,
     suggestedFriend: []
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
     },

});

export const {
     
} = friendSlice.actions;

export default friendSlice.reducer;
