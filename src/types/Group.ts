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
    createdAt: string;
    updatedAt: Date;
    imageUrl: string;
    memberNum: number;
    adminNum: number;
    joined: boolean;
}

export interface GroupRequest {
    groupId?: number;
    adminId: number;
    name?: string;
    description?: string;
    imageUrl?: string;
    location?: string;
    privacy?: GroupPrivacy;
}