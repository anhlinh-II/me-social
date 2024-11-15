import { request } from "http"
import { IAccount, IApiResponse, IGetAccount, IUser } from "../types/backend"
import instance from "./Axios-customize"
import { UserCreationRequest } from "../types/User"

export const callRegister = (request: UserCreationRequest) => {
    return instance.post<IApiResponse<IUser>>('/api/auth/register', request)
}

export const callLogin = (username: string, password: string) => {
    return instance.post<IApiResponse<IAccount>>('/api/auth/login', { username, password })
}

export const callLogout = () => {
    return instance.post<IApiResponse<void>>('/api/auth/logout')
}

export const callFetchAccount = () => {
    return instance.get<IApiResponse<IGetAccount>>('/api/auth/account')
}