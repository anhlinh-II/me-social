import { PostRequest, PostResponse } from '../types/Post';
import instance from './Axios-customize';
import { IApiResponse, Page } from '../types/backend';

// Get Posts for NewsFeed
export const getPostsForNewsFeed = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<PostResponse>>>(`/api/posts/newsfeed?userId=${userId}&pageNum=${pageNum}`)).data;
};

// Get Posts for Group Activities
export const getPostsForGroupActivities = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<PostResponse>>>(`/api/posts/newsfeed/groups?userId=${userId}&pageNum=${pageNum}`)).data;
};

// Get Posts By User
export const getPostsByUser = async (userId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<PostResponse>>>(`/api/posts/user?userId=${userId}&pageNum=${pageNum}`)).data;
};

// Get Posts By Group
export const getPostsByGroup = async (groupId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<PostResponse>>>(`/api/posts/group?groupId=${groupId}&pageNum=${pageNum}`)).data;
};

// Get Posts By Tag
export const getPostsByTag = async (tagId: number, pageNum = 0) => {
    return (await instance.get<IApiResponse<Page<PostResponse>>>(`/api/posts/tag?tagId=${tagId}&pageNum=${pageNum}`)).data;
};

// Create New Post
export const createPost = async (postRequest: PostRequest) => {
    return (await instance.post<IApiResponse<PostResponse>>(`/api/posts/new`, postRequest)).data;
};

// Delete Post
export const deletePost = async (postId: number) => {
    return (await instance.delete<IApiResponse<void>>(`/api/posts/delete/${postId}`)).data;
};

// Edit Post
export const editPost = async (postRequest: PostRequest) => {
    return (await instance.put<IApiResponse<PostResponse>>(`/api/posts/edit`, postRequest)).data;
};

