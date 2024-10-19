export enum GroupPrivacy {
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
}

export interface GroupResponse {
    id: number;
    name: string;
    description: string;
    privacy: GroupPrivacy;
    createdAt: Date;
    updatedAt: Date;
    memberNum: number;
    adminNum: number;
}

export interface GroupRequest {
    groupId?: number;
    adminId: number;
    name: string;
    description?: string;
    privacy: GroupPrivacy;
}