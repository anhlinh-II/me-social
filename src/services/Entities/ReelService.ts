import { ReelRequest, ReelResponse } from '../Types/Reel';
import instance from '../../config/axios-customize';
import { IApiResponse, Page } from '../../types/backend';

// Create Reel
export const createReel = async (request: ReelRequest) => {
    return (await instance.post<IApiResponse<ReelResponse>>('/api/reels', request)).data;
};

// Get Reel by ID
export const getReelById = async (id: string) => {
    return (await instance.get<IApiResponse<ReelResponse>>(`/api/reels/${id}`)).data;
};

// Get Reels by User ID (Paginated)
export const getReelsByUserId = async (userId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<ReelResponse>>>('/api/reels/user', { params: { userId, pageNum } })).data;
};

// Delete Reel by ID
export const deleteReel = async (id: string): Promise<void> => {
    await instance.delete<IApiResponse<void>>(`/api/reels/delete/${id}`);
};
