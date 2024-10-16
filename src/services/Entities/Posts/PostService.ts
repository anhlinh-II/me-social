import axios from 'axios';
import { PostRequest, PostResponse } from '../../Types/Post';

const API_URL = 'http://localhost:8080/api/posts';

// Get Posts for NewsFeed
export const getPostsForNewsFeed = async (userId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/newsfeed?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Get Posts for Group Activities (Newsfeed)
export const getPostsForGroupActivities = async (userId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/newsfeed/groups?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Get Posts By User
export const getPostsByUser = async (userId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/user?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Get Posts By Group
export const getPostsByGroup = async (groupId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/group?groupId=${groupId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Get Posts By Tag
export const getPostsByTag = async (tagId: number, pageNum = 0, token: string): Promise<{ result: { content: PostResponse[] } }> => {
    const response = await axios.get(`${API_URL}/tag?tagId=${tagId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Create New Post
export const createPost = async (postRequest: PostRequest, token: string): Promise<{ result: PostResponse }> => {
    const response = await axios.post(`${API_URL}/new`, postRequest, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};

// Delete Post
export const deletePost = async (postId: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/delete/${postId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

// Edit Post
export const editPost = async (postRequest: PostRequest, token: string): Promise<{ result: PostResponse }> => {
    const response = await axios.put(`${API_URL}/edit`, postRequest, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
};
