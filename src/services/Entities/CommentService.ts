import axios from 'axios';
import { CommentRequest, CommentResponse } from '../Types/Comment';

const API_URL = 'http://localhost:8080/api/comments';

// Get Comment by ID
export const getCommentById = async (id: number, token: string): Promise<CommentResponse> => {
    const response = await axios.get(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Comments by Post
export const getCommentsByPost = async (postId: number, pageNum = 0, token: string): Promise<{ content: CommentResponse[] }> => {
    const response = await axios.get(`${API_URL}/post?postId=${postId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Get Comments by User
export const getCommentsByUser = async (userId: number, pageNum = 0, token: string): Promise<{ content: CommentResponse[] }> => {
    const response = await axios.get(`${API_URL}/user?userId=${userId}&pageNum=${pageNum}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Create Comment
export const createComment = async (request: CommentRequest, token: string): Promise<CommentResponse> => {
    const response = await axios.post(`${API_URL}/new`, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Edit Comment
export const editComment = async (request: CommentRequest, token: string): Promise<CommentResponse> => {
    const response = await axios.put(`${API_URL}/edit`, request, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.result;
};

// Delete Comment
export const deleteComment = async (commentId: number, token: string): Promise<void> => {
    await axios.delete(`${API_URL}/${commentId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
