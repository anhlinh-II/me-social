import axios from 'axios';
import { FriendshipResponse } from '../Types/Friendship';

const API_URL = 'http://localhost:8080/api/friendships';

// Get Friendship Status
export const getFriendStatus = async (requesterId: number, receiverId: number, token: string): Promise<FriendshipResponse | null> => {
    try {
        const response = await axios.get(`${API_URL}/${requesterId}/${receiverId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.result;
    } catch (error: any) {
        if (error.response && error.response.status === 404) {
            return null;
        }
        throw error;
    }
};

// Send Friend Request
export const sendFriendRequest = async (requesterId: number, receiverId: number, token: string): Promise<FriendshipResponse> => {
    const response = await axios.post(`${API_URL}/${requesterId}/${receiverId}`, null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete Friendship
export const deleteFriendship = async (id: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Edit Friendship Status
export const editFriendshipStatus = async (id: number, status: string, token: string): Promise<FriendshipResponse> => {
    const response = await axios.put(`${API_URL}/${id}/${status}`, null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};
