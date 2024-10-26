import { IAccount, IApiResponse, IGetAccount, IUser } from "../types/backend"
import instance from "./axios-customize"

export const callRegister = (name: string, email: string, password: string, age: number, gender: string, address: string) => {
    return instance.post<IApiResponse<IUser>>('/api/auth/register', { name, email, password, age, gender, address })
}

export const callLogin = (username: string, password: string) => {
    // console.log(import.meta as string);
    return instance.post<IApiResponse<IAccount>>('/api/auth/login', { username, password })
}

export const callFetchAccount = () => {
    return instance.get<IApiResponse<IGetAccount>>('/api/auth/account')
}