export interface Like {
    id: number;
    userId: number;
    postId?: number;
    commentId?: number;
    reelId?: number;
    storyId?: number;
    createdAt: string;
}
