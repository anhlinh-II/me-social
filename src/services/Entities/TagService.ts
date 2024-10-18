import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tags';

export interface Tag {
    id: number;
    name: string;
}

// Get All Tags (Paginated)
export const getAllTags = async (pageNum: number = 0, token: string): Promise<Tag[]> => {
    const response = await axios.get(`${API_URL}/get/all`, {
        params: { pageNum },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Get All Tags Sorted by Post Count (Paginated)
export const getAllTagsSortedByPostCount = async (pageNum: number = 0, token: string): Promise<Tag[]> => {
    const response = await axios.get(`${API_URL}/get/popular`, {
        params: { pageNum },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result.content;
};

// Create Tag
export const createTag = async (nameTag: string, token: string): Promise<Tag> => {
    const response = await axios.post(API_URL, { nameTag }, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete Tag by ID
export const deleteTagById = async (id: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Delete Tag by Object
export const deleteTagByObject = async (tag: Tag, token: string): Promise<void> => {
    await axios.delete(API_URL, {
        data: tag,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
