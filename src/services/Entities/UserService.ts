import axios from 'axios';
import { UserCreationRequest, UserUpdateRequest, UserResponse, UserDTO } from '../Types/User';

const API_URL = 'http://localhost:8080/api/users';

// Create User
export const createUser = async (request: UserCreationRequest, token: string): Promise<UserResponse> => {
    const response = await axios.post(API_URL, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get User by ID
export const getUserById = async (id: number, token: string): Promise<UserResponse> => {
    const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Update User
export const updateUser = async (request: UserUpdateRequest, token: string): Promise<UserResponse> => {
    const response = await axios.put(`${API_URL}/updateUser`, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete User by ID
export const deleteUserById = async (id: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Get All Users
export const getAllUsers = async (page: number = 0, size: number = 20, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}?page=${page}&size=${size}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get Group Members
export const getGroupMembers = async (groupId: number, pageNum: number = 0, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}/get/group/members?groupId=${groupId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get Group Admins
export const getGroupAdmins = async (groupId: number, pageNum: number = 0, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}/get/group/admins?groupId=${groupId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get User's Friends
export const getUserFriends = async (userId: number, pageNum: number = 0, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}/get/friends?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get Mutual Friends
export const getMutualFriends = async (meId: number, youId: number, pageNum: number = 0, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}/get/mutualFriends?meId=${meId}&youId=${youId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get Suggested Friends
export const getSuggestedFriends = async (userId: number, pageNum: number = 0, token: string): Promise<{ content: UserDTO[] }> => {
    const response = await axios.get(`${API_URL}/get/friends/suggested?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};
