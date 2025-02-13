import { IApiResponse } from "../types/backend";
import { Message, SendMessageRequest } from "../types/Message"
import instance from "./Axios-customize"

export const createMessage = async (request: SendMessageRequest) => {
     return await instance.post<IApiResponse<Message>>(`/api/messages/create`, request);
}

export const getChatMessages = async (chatId: number) => {
     return await instance.get<IApiResponse<Message[]>>(`/api/messages/chat/${chatId}`);
}