import { IApiResponse } from "../types/backend";
import { FavoriteRequest, FavoriteResponse } from "../types/Favorite";
import instance from "./Axios-customize";

export const createPostFavorite = async (request: FavoriteRequest) => {
     return (await instance.post<IApiResponse<FavoriteResponse>>(`/api/favorites/add`, request)).data;
}

export const deletePostFavorite = async (userId: number, postId: number) => {
     return (await instance.delete<IApiResponse<void>>(`/api/favorites/${userId}/${postId}`)).data;
}