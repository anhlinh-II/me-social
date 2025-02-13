import exp from "constants";
import { UserResponse } from "./User";

export interface SendMessageRequest {
     userId: number;
     chatId: number;
     content: string;
}

export interface Message {
     id: number;
     content: string;
     timestamp: string;
     user: any;
     chat: any;
}

export interface MessageResponse {
     id: number;
     content: '';
     timestampt: '';
     sender: UserResponse;
     chatId: number;
}