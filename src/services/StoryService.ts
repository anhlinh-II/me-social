import instance from "./Axios-customize";
import { IApiResponse, Page } from "../types/backend";
import { StoryRequest, StoryResponse } from "../types/Story";


// Create Story
export const createStory = async (request: StoryRequest) => {
    return (await instance.post<IApiResponse<StoryResponse>>(`/api/stories`, request)).data;
};

// Get Story by ID
export const getStoryById = async (id: string) => {
    return (await instance.get<IApiResponse<StoryResponse>>(`/api/stories/${id}`)).data;
};

// Get All Stories by User (Paginated)
export const getStoriesByUserId = async (userId: number, pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<StoryResponse>>>(`/api/stories/user`, { params: { userId, pageNum } })).data;
};

// Delete Story by ID
export const deleteStory = async (id: string) => {
    await instance.delete<IApiResponse<void>>(`/api/stories/delete/${id}`);
};
