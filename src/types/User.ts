export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

export interface UserCreationRequest {
    username: string;
    password: string;
    email: string;
    gender?: Gender;
}

export interface UserUpdateRequest {
    id: number;
    avatarUrl?: string;
    firstName?: string;
    lastName?: string;
    dob?: Date;
    gender?: Gender;
    bio?: string;
    location?: string;
}

export interface UserDTO {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    location: string;
    isFriend: boolean;
    friendNum: number;
    avatarUrl: string;
    mutualFriendsNum?: number | null;
}

export interface UserResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    avatarUrl: string;
    lastName: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
    gender?: Gender;
    groupNum: number;
    friendNum: number;
    mutualFriendsNum?: number | null;
}
