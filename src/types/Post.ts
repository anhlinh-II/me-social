export interface Post {
    id: number;
    userId: number;
    userFullName: string;
    avatar: string;
    groupId: number;
    groupName: string;
    content: string;
    privacy: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
    time: number;
    isLiked: boolean | undefined;
    isFavourited: boolean | undefined;
    publicIds: string[];
    urls: string[];
    imageError: boolean;
}


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
    urls: string[];
    publicIds?: string[];
    privacy: PostPrivacy;
    nameTag?: string[];
}

export interface PostResponse {
    id: number;
    userId: number;
    avatarUrl: string;
    userFullName: string;
    groupId: number;
    groupName: string;
    groupAvatar: string;
    groupCreatedAt: string;
    content: string;
    urls: string[];
    publicIds: string[];
    privacy: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
    liked: boolean;
    favorite: boolean;
  }