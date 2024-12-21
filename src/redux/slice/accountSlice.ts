import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { callFetchAccount } from '../../services/AuthService';

// First, create the thunk
export const   fetchAccount = createAsyncThunk(
     'account/fetchAccount',
     async () => {
          const response = await callFetchAccount();
          return response.data;
     }
)

interface IState {
     isAuthenticated: boolean;
     isLoading: boolean;
     isRefreshToken: boolean;
     errorRefreshToken: string;
     user: {
          id: string;
          email: string;
          username: string;
          role: {
               id?: string;
               name?: string;
               permissions?: {
                    id: string;
                    name: string;
                    apiPath: string;
                    method: string;
                    module: string;
               }[]
          };
          firstName: string;
          lastName: string;
          bio: string;
          postNum: number;
          likeNum: number;
          active: boolean;
          avatarUrl: string;
     };
}

const initialState: IState = {
     isAuthenticated: false,
     isLoading: true,
     isRefreshToken: false,
     errorRefreshToken: "",
     user: {
          id: "",
          email: "",
          username: "",
          role: {
               id: "",
               name: "",
               permissions: [],
          },
          bio: "",
          postNum: 0,
          likeNum: 0,
          active: false,
          firstName: '',
          lastName: '',
          avatarUrl: ''
     },
};

export const accountSlide = createSlice({
     name: 'account',
     initialState,
     // The `reducers` field lets us define reducers and generate associated actions
     reducers: {
          setUserLoginInfo: (state, action) => {
               console.log("payload: ", action.payload)
               state.isAuthenticated = true;
               state.isLoading = false;
               state.user.id = action?.payload?.user?.id;
               state.user.email = action.payload.user.email;
               state.user.username = action.payload.user.username;
               state.user.bio = action.payload.user.bio;
               state.user.role = action?.payload?.user?.role;
               state.user.postNum = action?.payload?.user?.postNum;
               state.user.likeNum = action?.payload?.user?.likeNum;
               state.user.active = action?.payload?.user?.active;
               state.user.firstName = action?.payload?.user?.firstName;
               state.user.lastName = action?.payload?.user?.lastName;
               state.user.avatarUrl = action?.payload?.user?.avatarUrl;

               if (!action?.payload?.user?.role) state.user.role = {};
               state.user.role.permissions = action?.payload?.role?.permissions ?? [];
          },
          setLogoutAction: (state) => {
               localStorage.removeItem('access_token');
               state.isAuthenticated = false;
               state.user = {
                    id: "",
                    email: "",
                    username: "",
                    role: {
                         id: "",
                         name: "",
                         permissions: [],
                    },
                    bio: "",
                    postNum: 0,
                    likeNum: 0,
                    active: false,
                    firstName: '',
                    lastName: '',
                    avatarUrl: ''
               }
          },
          setRefreshTokenAction: (state, action) => {
               state.isRefreshToken = action.payload?.status ?? false;
               state.errorRefreshToken = action.payload?.message ?? "";
          }

     },
     extraReducers: (builder) => {
          // Add reducers for additional action types here, and handle loading state as needed
          builder.addCase(fetchAccount.pending, (state, action) => {
               if (action.payload) {
                    state.isAuthenticated = false;
                    state.isLoading = true;
               }
          })

          builder.addCase(fetchAccount.fulfilled, (state, action) => {
               if (action.payload?.result?.user) {  // Access the user from 'result'
                    state.isAuthenticated = true;
                    state.isLoading = false;
                    state.user.id = action.payload.result.user.id;
                    state.user.email = action.payload.result.user.email;
                    state.user.username = action.payload.result.user.username;
                    state.user.firstName = action.payload.result.user.firstName;
                    state.user.lastName = action.payload.result.user.lastName;
                    state.user.role = action.payload.result.user.role;
                    state.user.avatarUrl = action.payload.result.user.avatarUrl;
                    if (!action.payload.result.user.role) state.user.role = {};
                    state.user.role.permissions = action.payload.result.user.role?.permissions ?? [];
               }
          });

          builder.addCase(fetchAccount.rejected, (state, action) => {
               if (action.payload) {
                    state.isAuthenticated = false;
                    state.isLoading = false;
               }
          })

     },

});

export const {
     setUserLoginInfo, setLogoutAction, setRefreshTokenAction
} = accountSlide.actions;

export default accountSlide.reducer;
