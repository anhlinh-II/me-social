
export interface ReelResponse {
    id: string;
    userId: number;
    url: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    likeNum: number;
    commentNum: number;
}

export interface ReelRequest {
    userId: number;
    url: string;
    content: string;
}