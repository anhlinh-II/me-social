export enum ReelPrivacy {
    PUBLIC = 'PUBLIC',
    PRIVATE = 'PRIVATE',
    FRIENDS = 'FRIENDS',
}

export interface ReelResponse {
    id: string;
    userId: number;
    url: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
    viewsCount: number;
}

export interface ReelRequest {
    userId: number;
    url: string;
    content: string;
    privacy: ReelPrivacy;
}