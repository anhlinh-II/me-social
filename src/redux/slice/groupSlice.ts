import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createGroup, getGroupById, getGroupsByUserId, getSuggestedGroups } from '../../services/GroupService';
import { GroupPrivacy, GroupRequest, GroupResponse } from '../../types/Group';

interface IFetchGroup {
     userId: number;
     pageNum: number;
}

// First, create the thunk
export const fetchCreateGroup = createAsyncThunk(
     'group/createGroup',
     async (request: GroupRequest) => {
          const response = await createGroup(request);
          console.log(response);
          return response;
     }
)

export const fetchGroupById = createAsyncThunk(
     'group/fetchGroupById',
     async (id: number) => {
          const response = await getGroupById(id);
          console.log(response);
          return response;
     }
)

export const fetchGroupByUser = createAsyncThunk(
     'group/fetchGroupByUser',
     async (id: number) => {
          const response = await getGroupsByUserId(id);
          console.log(response);
          return response;
     }
)

export const fetchSuggestedGroupByUser = createAsyncThunk(
     'group/fetchSuggestedGroupByUser',
     async ({ userId, pageNum }: IFetchGroup) => {
          const response = await getSuggestedGroups(userId, pageNum);
          console.log(response);
          return response;
     }
)

interface IState {
     isLoading: boolean;
     error: string | null;
     groups: GroupResponse[];
     group: GroupResponse;
}

const initialState: IState = {
     group: {
          id: 0,
          name: "",
          description: "",
          privacy: GroupPrivacy.PUBLIC,
          location: "",
          createdAt: new Date(0),
          updatedAt: new Date(0),
          imageUrl: "",
          memberNum: 0,
          adminNum: 0,
     },
     groups: [],
     error: null,
     isLoading: false,
}

const handlePending = (state: IState) => {
     state.isLoading = true;
     state.error = null;
}

const handleRejected = (state: IState, action: any) => {
     state.isLoading = false;
     state.error = action.error.message || 'Failed to fetch create group';
}

export const groupSlice = createSlice({
     name: 'group',
     initialState,
     reducers: {
     },
     extraReducers: (builder) => {
          builder.addCase(fetchCreateGroup.pending, handlePending)
          builder.addCase(fetchCreateGroup.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               console.log(action.payload);
               state.groups = state.groups.concat(action.payload.result);
          })
          builder.addCase(fetchCreateGroup.rejected, handleRejected)

          // handle fetchGroupById
          // Handle fetchGroupById cases
          builder.addCase(fetchGroupById.pending, handlePending);
          builder.addCase(fetchGroupById.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.group = action.payload.result; // Assuming response.result contains the group object
          });
          builder.addCase(fetchGroupById.rejected, handleRejected);

          // handle fetch groups by user
          builder.addCase(fetchGroupByUser.pending, handlePending)
          builder.addCase(fetchGroupByUser.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.groups = action.payload.result.content;
          });
          builder.addCase(fetchGroupByUser.rejected, handleRejected);

          // handle fetch suggested groups for user
          builder.addCase(fetchSuggestedGroupByUser.pending, handlePending);
          builder.addCase(fetchSuggestedGroupByUser.fulfilled, (state: IState, action: any) => {
               state.isLoading = false;
               state.groups = action.payload.result.content;
          })
          builder.addCase(fetchSuggestedGroupByUser.rejected, handleRejected);
     },

});


export const {

} = groupSlice.actions;

export default groupSlice.reducer;
