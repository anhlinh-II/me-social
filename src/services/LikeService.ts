import { Like } from '../types/Like';
import instance from './Axios-customize';
import { IApiResponse } from '../types/backend';

// Get Post Like Count
export const getPostLikeCount = async (postId: number) => {
    return (await instance.get<IApiResponse<number>>(`/api/likes/post/count/${postId}`)).data;
};

// Get Comment Like Count
export const getCommentLikeCount = async (commentId: number) => {
    return (await instance.get<IApiResponse<number>>(`/api/likes/comment/count/${commentId}`)).data;
};

// Create Post Like
export const createPostLike = async (userId: number, postId: number) => {
    return (await instance.post<IApiResponse<Like>>(`/api/likes/post/add/${userId}/${postId}`, null)).data;
};

// Create Comment Like
export const createCommentLike = async (userId: number, commentId: number) => {
    return (await instance.post<IApiResponse<Like>>(`/api/likes/comment/add/${userId}/${commentId}`, null)).data;
};

// Delete Post Like
export const deletePostLike = async (userId: number, postId: number) => {
    await instance.delete<IApiResponse<void>>(`/api/likes/post/remove/${userId}/${postId}`);
};

// Delete Comment Like
export const deleteCommentLike = async (userId: number, commentId: number) => {
    await instance.delete<IApiResponse<void>>(`/api/likes/comment/remove/${userId}/${commentId}`);
};
