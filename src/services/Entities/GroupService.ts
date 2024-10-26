import { GroupRequest, GroupResponse } from '../Types/Group';
import instance from '../../config/axios-customize';
import { IApiResponse, Page } from '../../types/backend';

// Get Group by ID
export const getGroupById = async (id: number) => {
    return (await instance.get<IApiResponse<GroupResponse>>(`/api/groups/${id}`)).data;
};

// Get Groups by User ID
export const getGroupsByUserId = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<GroupResponse>>>(`/api/groups/user?userId=${userId}&pageNum=${pageNum}`)).data
};

// Get Suggested Groups
export const getSuggestedGroups = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<GroupResponse>>>(`/api/groups/suggested?userId=${userId}&pageNum=${pageNum}`)).data;
};

// Create Group
export const createGroup = async (request: GroupRequest) => {
    return (await instance.post<IApiResponse<GroupResponse>>(`/api/groups`, request)).data;
};

// Add Admin to Group
export const addAdminToGroup = async (groupId: number, adminId: number) => {
    return (await instance.post<IApiResponse<void>>(`/api/groups/admin/${groupId}/${adminId}`)).data;
};

// Add Member to Group
export const addMemberToGroup = async (groupId: number, memberId: number) => {
    return (await instance.post<IApiResponse<void>>(`/api/groups/member/${groupId}/${memberId}`)).data;
};

// Edit Group
export const editGroup = async (request: GroupRequest) => {
    return (await instance.put<IApiResponse<GroupResponse>>(`/api/groups`, request)).data;
};

// Delete Group
export const deleteGroup = async (groupId: number) => {
    return (await instance.delete<IApiResponse<void>>(`/api/groups/${groupId}`)).data;
};

// Remove Admin from Group
export const removeAdminFromGroup = async (groupId: number, adminId: number) => {
    return (await instance.delete<IApiResponse<void>>(`/api/groups/admin/remove/${groupId}/${adminId}`)).data;
};

// Remove Member from Group
export const removeMemberFromGroup = async (groupId: number, memberId: number) => {
    return (await instance.delete<IApiResponse<void>>(`/api/groups/member/remove/${groupId}/${memberId}`)).data;
};
