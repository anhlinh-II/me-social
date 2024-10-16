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
