export interface CommentRequest {
    content: string;
    postId: number;
    userId: number;
    parentCommentId?: number;
}

export interface CommentResponse {
    id: number;
    content: string;
    postId: number;
    userId: number;
    username: string;
    avatarUrl: string;
    createdAt: string;
    updatedAt: string;
    likeCount: number;
    parentCommentId: number;
    respondedToUser: string;
    responseNum: number;
}