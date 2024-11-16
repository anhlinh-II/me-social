import { IAccount, IApiResponse, IGetAccount, IUser } from "../types/backend"
import instance from "./Axios-customize"
import { UserCreationRequest } from "../types/User"

export const callRegister = (request: UserCreationRequest) => {
        const response = instance.post<IApiResponse<IUser>>('/api/auth/register', request);

        return response;
        // console.log(response);
        // if (response.status === 200 && response.data) {
        //     return response.data; // Successful response
        // }
        // if (response.status !== 200) {
        //     return response;
        // }
};


export const callLogin = (username: string, password: string) => {
    return instance.post<IApiResponse<IAccount>>('/api/auth/login', { username, password })
}

export const callLogout = () => {
    return instance.post<IApiResponse<void>>('/api/auth/logout')
}

export const callFetchAccount = () => {
    return instance.get<IApiResponse<IGetAccount>>('/api/auth/account')
}

export const callVerifyOtp = (email: string, otp: string) => {
    return instance.post<IApiResponse<void>>(`/api/auth/verify-otp`, {
        param: {
            email, otp
        }
    })
}