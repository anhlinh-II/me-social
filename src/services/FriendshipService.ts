import { FriendshipResponse } from '../types/Friendship';
import instance from './Axios-customize';
import { IApiResponse, Page } from '../types/backend';
import { List, size } from 'lodash';

// Get Friendship Status
export const getFriendStatus = async (requesterId: number, receiverId: number) => {
    return (await instance.get<IApiResponse<FriendshipResponse>>(`/api/friendships/${requesterId}/${receiverId}`)).data;
};

// Send Friend Request
export const sendFriendRequest = async (requesterId: number, receiverId: number) => {
    return (await instance.post<IApiResponse<FriendshipResponse>>(`/api/friendships/${requesterId}/${receiverId}`, null)).data;
};

// Delete Friendship
export const deleteFriendship = async (id: number) => {
    return await instance.delete<IApiResponse<void>>(`/api/friendships/${id}`);
};

// Edit Friendship Status
export const editFriendshipStatus = async (id: number, status: string) => {
    return (await instance.put<IApiResponse<FriendshipResponse>>(`/api/friendships/${id}/${status}`, null)).data;
};

export const getFriendRequestByUser = async (userId: number, page: number = 0, size: number = 0) => {
    return (await instance.get<IApiResponse<Page<FriendshipResponse>>>(`/api/friendships/friendRequest`,
        {params: {userId, page, size}}
    )).data;
}

export const getUserFriends = async (userId: number, page: number, size: number) => { 
    return (
        await instance.get<IApiResponse<Page<FriendshipResponse>>>(
            `/api/friendships/friends`, 
            { params: { userId, page, size } }
        )
    ).data;
};


export const getCurrentAcceptedFriend = async (userId: number) => {
    return (await instance.get<IApiResponse<FriendshipResponse[]>>(`/api/friendships/currentAccepted/${userId}`))
}