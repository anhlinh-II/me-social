import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchAccount } from '../../services/AuthService';

// First, create the thunk
export const fetchAccount = createAsyncThunk(
     'friend/fetchAccount',
     async () => {
          const response = await callFetchAccount();
          return response.data;
     }
)

interface IState {
     isAuthenticated: boolean;
     isLoading: boolean;
     
}

const initialState: IState = {
     isAuthenticated: false,
     isLoading: true,
     
};

export const friendSlice = createSlice({
     name: 'friend',
     initialState,
     reducers: {
          

     },
     extraReducers: (builder) => {
          

     },

});

export const {
     
} = friendSlice.actions;

export default friendSlice.reducer;
