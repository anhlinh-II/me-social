export interface CommentRequest {
    content: string;
    postId: number;
    userId: number;
    id: number;
}

export interface CommentResponse {
    id: number;
    content: string;
    postId: number;
    userId: number;
    createdAt: Date;
    updatedAt: Date;
    likeCount: number;
}