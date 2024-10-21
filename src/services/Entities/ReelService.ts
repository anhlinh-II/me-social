import axios from 'axios';
import { ReelRequest, ReelResponse } from '../Types/Reel';

const API_URL = 'http://localhost:8080/api/reels';

// Create Reel
export const createReel = async (request: ReelRequest, token: string): Promise<ReelResponse> => {
    const response = await axios.post(API_URL, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Reel by ID
export const getReelById = async (id: string, token: string): Promise<ReelResponse> => {
    const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Reels by User ID (Paginated)
export const getReelsByUserId = async (userId: number, pageNum: number = 0, token: string): Promise<ReelResponse[]> => {
    const response = await axios.get(`${API_URL}/user`, {
        params: { userId, pageNum },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content; // Assuming content holds the list of reels in Page<ReelResponse>
};

// Delete Reel by ID
export const deleteReel = async (id: string, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
