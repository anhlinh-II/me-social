import axios from 'axios';

const API_URL = 'http://localhost:8080/api/likes';

export interface Like {
    id: number;
    userId: number;
    postId?: number;
    commentId?: number;
    reelId?: number;
    storyId?: number;
    createdAt: string;
}

// Get Post Like Count
export const getPostLikeCount = async (postId: number, token: string): Promise<number> => {
    const response = await axios.get(`${API_URL}/post/count/${postId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Comment Like Count
export const getCommentLikeCount = async (commentId: number, token: string): Promise<number> => {
    const response = await axios.get(`${API_URL}/comment/count/${commentId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Create Post Like
export const createPostLike = async (userId: number, postId: number, token: string): Promise<Like> => {
    const response = await axios.post(`${API_URL}/post/add/${userId}/${postId}`, null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Create Comment Like
export const createCommentLike = async (userId: number, commentId: number, token: string): Promise<Like> => {
    const response = await axios.post(`${API_URL}/comment/add/${userId}/${commentId}`, null, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete Post Like
export const deletePostLike = async (userId: number, postId: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/post/remove/${userId}/${postId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

// Delete Comment Like
export const deleteCommentLike = async (userId: number, commentId: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/comment/remove/${userId}/${commentId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
