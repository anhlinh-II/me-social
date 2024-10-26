import { IApiResponse, Page } from '../../types/backend';
import instance from '../../config/axios-customize';

export interface Tag {
    id: number;
    name: string;
}

// Get All Tags (Paginated)
export const getAllTags = async (pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<Tag>>>('/api/tags/get/all', { params: { pageNum } })).data;
};

// Get All Tags Sorted by Post Count (Paginated)
export const getAllTagsSortedByPostCount = async (pageNum: number = 0) => {
    return (await instance.get<IApiResponse<Page<Tag>>>('/api/tags/get/popular', { params: { pageNum } })).data;
};

// Create Tag
export const createTag = async (nameTag: string) => {
    return (await instance.post<IApiResponse<Tag>>('/api/tags', { nameTag })).data;
};

// Delete Tag by ID
export const deleteTagById = async (id: number) => {
    await instance.delete<IApiResponse<void>>(`/api/tags/${id}`);
};

// Delete Tag by Object
export const deleteTagByObject = async (tag: Tag) => {
    await instance.delete<IApiResponse<void>>('/api/tags', { data: tag });
};
