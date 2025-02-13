import { MessageResponse } from "./Message";
import { UserResponse } from "./User";

export interface SingleChatRequest {
     userId: number;
}

export interface GroupChatRequest {
     userIds: [];
     chatName: string;
     chatImage: string;
}

export interface ChatResponse {
     id: number;
     chatName: string;
     chatImage: string;
     admins: UserResponse[];
     isGroup: boolean;
     createdBy: UserResponse;
     users: UserResponse[];
     messages: MessageResponse[];
}