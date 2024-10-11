export interface PostResponse {
    id: number;
    userId: number;
    groupId: number;
    content: string;
    privacy: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
  }