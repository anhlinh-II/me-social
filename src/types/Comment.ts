export interface CommentRequest {
    id?: number;
    content: string;
    postId: number;
    userId: number;
    parentCommentId?: number;
}

export interface UpdateCommentRequest {
    id: number;
    content: string | undefined;
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
    likeNum: number;
    parentCommentId: number;
    respondedToUser: string;
    responseNum: number;
    liked: boolean;
}