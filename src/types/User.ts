enum Gender {
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
    firstName: string;
    lastName: string;
    location: string;
    isFriend: boolean;
    friendNum: number;
    mutualFriendsNum?: number | null;
}

export interface UserResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    dob: Date;
    createdAt: Date;
    updatedAt: Date;
    gender?: Gender;
    groupNum: number;
    friendNum: number;
    mutualFriendsNum?: number | null;
}
