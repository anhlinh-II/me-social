import instance from "./Axios-customize"
import { ChatResponse, GroupChatRequest, SingleChatRequest } from "../types/Chat"
import { IApiResponse } from "../types/backend";

export const createChat = async (request: SingleChatRequest) => {
     return await instance.post<IApiResponse<ChatResponse>>(`/api/chats/single`, request);
}

export const createGroupChat = async (request: GroupChatRequest) => {
     return await instance.post<IApiResponse<ChatResponse>>(`/api/chats/group`, request);
}

export const getUsersChat = async () => {
     return await instance.get<IApiResponse<ChatResponse[]>>(`/api/chats/user`);
}

export const getChatByUserIds = async (userId1: number, userId2: number) => {
     return await instance.get<IApiResponse<ChatResponse>>(`api/chats/${userId1}/${userId2}`);
}