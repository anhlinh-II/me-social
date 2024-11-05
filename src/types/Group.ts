export enum GroupPrivacy {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
}

export interface GroupResponse {
    id: number;
    name: string;
    description: string;
    privacy: GroupPrivacy;
    location: string;
    createdAt: Date;
    updatedAt: Date;
    imageUrl: string;
    memberNum: number;
    adminNum: number;
}

export interface GroupRequest {
    groupId?: number;
    adminId: number;
    name: string;
    description?: string;
    location: string;
    privacy: GroupPrivacy;
}