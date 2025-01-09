export interface FriendshipRequest {
    requesterId: number;
    receiverId: number;
}

export interface FriendshipResponse {
    friendshipId: number;
    requesterId: number;
    receiverId: number;
    requesterName: string;
    receiverName: string;
    requesterAvatar: string;
    receiverAvatar: string;
    mutualFriend: number;
    status: string;
    acceptedAt: string;
}