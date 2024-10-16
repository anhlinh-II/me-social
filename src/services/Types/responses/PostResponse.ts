export interface PostResponse {
    id: number;
    userId: number;
    userFullName: string;
    groupId: number;
    groupName: string;
    content: string;
    privacy: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
  }