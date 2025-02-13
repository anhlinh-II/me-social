import { UserCreationRequest, UserUpdateRequest, UserResponse, UserDTO } from '../types/User';
import { IApiResponse, Page } from '../types/backend';
import instance from './Axios-customize';

// Create User
export const createUser = async (request: UserCreationRequest) => {
    return (await instance.post<IApiResponse<UserResponse>>('/api/users', request)).data;
};

// Get User by ID
export const getUserById = async (id: number) => {
    return (await instance.get<IApiResponse<UserResponse>>(`/api/users/${id}`)).data;
};

// Update User
export const updateUser = async (request: UserUpdateRequest) => {
    return (await instance.put<IApiResponse<UserResponse>>('/api/users/updateUser', request)).data;
};

// Delete User by ID
export const deleteUserById = async (id: number): Promise<void> => {
    await instance.delete<IApiResponse<void>>(`/api/users/${id}`);
};

// Get All Users
export const getAllUsers = async (page: number = 0, size: number = 20) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users', { params: { page, size } })).data;
};

// Get Group Members
export const getGroupMembers = async (groupId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users/get/group/members', { params: { groupId, pageNum } })).data;
};

// Get Group Admins
export const getGroupAdmins = async (groupId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users/get/group/admins', { params: { groupId, pageNum } })).data;
};

// Get User's Friends
export const getUserFriends = async (userId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users/get/friends', { params: { userId, pageNum } })).data;
};

// Get Mutual Friends
export const getMutualFriends = async (meId: number, youId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users/get/mutualFriends', { params: { meId, youId, pageNum } })).data;
};

// Get Suggested Friends
export const getSuggestedFriends = async (userId: number, page: number = 0, size: number = 20) => {
    return (await instance.get<IApiResponse<Page<UserDTO>>>('/api/users/get/friends/suggested', { params: { userId, page, size } })).data;
};

export const searchUser = async (query: string) => {
    return (await instance.get<IApiResponse<UserDTO[]>>(`/api/users/search/${query}`)).data;
}
