export enum StoryPrivacy {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    FRIENDS = 'FRIENDS',
}

export interface StoryResponse {
    id: string;
    userId: number;
    url: string;
    thumbnail: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
    viewsCount: number;
}

export interface StoryRequest {
    userId: number;
    url: string;
    thumbnail: string;
    content: string;
    privacy: StoryPrivacy;
}