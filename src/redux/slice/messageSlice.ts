import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { SendMessageRequest } from '../../types/Message';
import { createMessage, getChatMessages } from '../../services/MessageService';

export const handleCreateMessage = createAsyncThunk(
     'message/handleCreateMessage',
     async (request: SendMessageRequest) => {
          return (await createMessage(request)).data;
     }
)

export const fetchChatMessages = createAsyncThunk(
     'message/fetchChatMessages',
     async (chatId: number) => {
         return (await getChatMessages(chatId)).data;
     }
)

interface IState {
     messages: any;
     newMessage: any;
     isLoading: boolean;
     error: string | null;
}

const initialState: IState = {
     messages: [],
     newMessage: null,
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

export const messageSlice = createSlice({
     name: 'message',
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          // handle create chat
          builder.addCase(handleCreateMessage.pending, handlePending)
          builder.addCase(handleCreateMessage.fulfilled, (state: IState, action: any) => {
               state.newMessage = action.payload.result
               state.isLoading = false
          })
          builder.addCase(handleCreateMessage.rejected, handleRejected)

          // handle create group chat
          builder.addCase(fetchChatMessages.pending, handlePending)
          builder.addCase(fetchChatMessages.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.error = null;
               state.messages = action.payload.result
          })
          builder.addCase(fetchChatMessages.rejected, handleRejected)
     },

});

export const {

} = messageSlice.actions;

export default messageSlice.reducer;
