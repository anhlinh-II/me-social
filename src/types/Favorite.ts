import { PostResponse } from "./Post";

export interface FavoriteRequest {
     userId: number;
     postId: number;
}

export interface FavoriteResponse {
     id: number;
     userId: number;
     username: string;
     post: PostResponse;
     createdAt: string;
}