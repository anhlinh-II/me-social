import { CommentRequest, CommentResponse, UpdateCommentRequest } from '../types/Comment';
import instance from './Axios-customize';
import { IApiResponse, Page } from '../types/backend';

// Get Comment by ID
export const getCommentById = async (id: number) => {
    return (await instance.get<IApiResponse<CommentResponse>>(`/api/comments/${id}`)).data;
};

// Get Comments by Post
export const getTopCommentsByPost = async (userId: number, postId: number, pageNum = 0, size: number = 10) => {
    return (await instance.get<IApiResponse<{ content: CommentResponse[] }>>(`/api/comments/post/top-comment`, {
        params: {
            userId,
            page: pageNum,
            size,
            postId
        }
    })).data;
};

// Get Comments by User
export const getCommentsByUser = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<{ content: CommentResponse[] }>>(`/api/comments/user?userId=${userId}&pageNum=${pageNum}`)).data;
};

export const getAllChildrenComments = async (userId: number, parentCommentId: number, page: number, size: number) => {
    return (await instance.get<IApiResponse<Page<CommentResponse>>>(`/api/comments/child-comments`, {
        params: {
            userId,
            parentCommentId,
            page,
            size
        }
    })).data
}

// Create Comment
export const createComment = async (request: CommentRequest) => {
    return (await instance.post<IApiResponse<CommentResponse>>(`/api/comments/new`, request)).data;
};

// Edit Comment
export const editComment = async (request: UpdateCommentRequest) => {
    return (await instance.put<IApiResponse<CommentResponse>>(`/api/comments/edit`, request)).data;
};

// Delete Comment
export const deleteComment = async (commentId: number) => {
    return (await instance.delete<IApiResponse<void>>(`/api/comments/${commentId}`)).data;
};

