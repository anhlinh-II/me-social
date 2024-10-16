import axios from 'axios';
import { GroupRequest, GroupResponse } from '../../Types/Group';

const API_URL = 'http://localhost:8080/api/groups';

// Get Group by ID
export const getGroupById = async (id: number, token: string): Promise<GroupResponse> => {
    const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Groups by User ID
export const getGroupsByUserId = async (userId: number, pageNum = 0, token: string): Promise<{ content: GroupResponse[] }> => {
    const response = await axios.get(`${API_URL}/user/?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get Suggested Groups
export const getSuggestedGroups = async (userId: number, pageNum = 0, token: string): Promise<{ content: GroupResponse[] }> => {
    const response = await axios.get(`${API_URL}/suggested?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Create Group
export const createGroup = async (request: GroupRequest, token: string): Promise<GroupResponse> => {
    const response = await axios.post(API_URL, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Add Admin to Group
export const addAdminToGroup = async (groupId: number, adminId: number, token: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/admin/${groupId}/${adminId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.message; // Or response.data.result if needed
};

// Add Member to Group
export const addMemberToGroup = async (groupId: number, memberId: number, token: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/member/${groupId}/${memberId}`, {}, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.message; // Or response.data.result if needed
};

// Edit Group
export const editGroup = async (request: GroupRequest, token: string): Promise<GroupResponse> => {
    const response = await axios.put(API_URL, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete Group
export const deleteGroup = async (groupId: number, token: string): Promise<string> => {
    const response = await axios.delete(`${API_URL}/${groupId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.message; // Or response.data.result if needed
};

// Remove Admin from Group
export const removeAdminFromGroup = async (groupId: number, adminId: number, token: string): Promise<string> => {
    const response = await axios.delete(`${API_URL}/admin/remove/${groupId}/${adminId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.message; // Or response.data.result if needed
};

// Remove Member from Group
export const removeMemberFromGroup = async (groupId: number, memberId: number, token: string): Promise<string> => {
    const response = await axios.delete(`${API_URL}/member/remove/${groupId}/${memberId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.message; // Or response.data.result if needed
};
