export interface FriendshipRequest {
    requesterId: number;
    receiverId: number;
}

export interface FriendshipResponse {
    friendshipId: number;
    requesterId: number;
    requesterName: string;
    receiverId: number;
    mutualFriend: number;
    status: string;
    requesterAvatar: string;
}