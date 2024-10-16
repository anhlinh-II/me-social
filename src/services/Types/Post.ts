export enum PostPrivacy {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    FRIENDS = 'FRIENDS',
}

export interface PostRequest {
    id?: number; 
    userId: number;
    groupId?: number;
    content?: string;
    privacy: PostPrivacy;
    nameTag?: string[];
}

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