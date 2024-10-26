import { CommentRequest, CommentResponse } from '../Types/Comment';
import instance from '../../config/axios-customize';
import { IApiResponse } from '../../types/backend';

// Get Comment by ID
export const getCommentById = async (id: number) => {
    return (await instance.get<IApiResponse<CommentResponse>>(`/api/comments/${id}`)).data;
};

// Get Comments by Post
export const getCommentsByPost = async (postId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<{ content: CommentResponse[] }>>(`/api/comments/post?postId=${postId}&pageNum=${pageNum}`)).data;
};

// Get Comments by User
export const getCommentsByUser = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<{ content: CommentResponse[] }>>(`/api/comments/user?userId=${userId}&pageNum=${pageNum}`)).data;
};

// Create Comment
export const createComment = async (request: CommentRequest) => {
    return (await instance.post<IApiResponse<CommentResponse>>(`/api/comments/new`, request)).data;
};

// Edit Comment
export const editComment = async (request: CommentRequest) => {
    return (await instance.put<IApiResponse<CommentResponse>>(`/api/comments/edit`, request)).data;
};

// Delete Comment
export const deleteComment = async (commentId: number): Promise<void> => {
    await instance.delete<IApiResponse<void>>(`/api/comments/${commentId}`);
};

