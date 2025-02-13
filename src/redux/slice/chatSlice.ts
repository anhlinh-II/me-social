import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ChatResponse, GroupChatRequest, SingleChatRequest } from '../../types/Chat';
import { createChat, createGroupChat, getUsersChat } from '../../services/ChatService';

export const handleCreateChat = createAsyncThunk(
     'chat/handleCreateChat',
     async (request: SingleChatRequest) => {
          return (await createChat(request)).data;
     }
)

export const handleCreateGroup = createAsyncThunk(
     'chat/handleCreateGroup',
     async (request: GroupChatRequest) => {
         return (await createGroupChat(request)).data;
     }
)

export const fetchUsersChat = createAsyncThunk(
     'chat/fetchUsersChat',
     async () => {
          const response = await getUsersChat();
          return response.data;
     }
)

interface IState {
     chats: ChatResponse[];
     createdGroup: any;
     createdChat: any;
     isLoading: boolean;
     error: string | null;
}

const initialState: IState = {
     chats: [],
     createdChat: null,
     createdGroup: null,
     isLoading: false,
     error: null,
};

const handlePending = (state: IState, action: any) => {
     state.isLoading = true;
     state.error = null;
}

const handleRejected = (state: IState, action: any) => {
     state.isLoading = false;
     state.error = action.error.message || 'Failed to fetch chat api';
}

export const chatSlice = createSlice({
     name: 'chat',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          // handle create chat
          builder.addCase(handleCreateChat.pending, handlePending)
          builder.addCase(handleCreateChat.fulfilled, (state: IState, action: any) => {
               state.createdChat = action.payload.result
               state.isLoading = false
          })
          builder.addCase(handleCreateChat.rejected, handleRejected)

          // handle create group chat
          builder.addCase(handleCreateGroup.pending, handlePending)
          builder.addCase(handleCreateGroup.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.error = null;
               state.createdGroup = action.payload.result
          })
          builder.addCase(handleCreateGroup.rejected, handleRejected)

          // fetch Users chat
          builder.addCase(fetchUsersChat.pending, handlePending)
          builder.addCase(fetchUsersChat.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.chats = action.payload.result;
               state.error = null
          })
          builder.addCase(fetchUsersChat.rejected, handleRejected)
     },

});

export const {

} = chatSlice.actions;

export default chatSlice.reducer;
