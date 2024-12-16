import { IAccount, IApiResponse, IGetAccount, IUser } from "../types/backend"
import instance from "./Axios-customize"
import { UserCreationRequest } from "../types/User"

export const callRegister = (request: UserCreationRequest) => {
    const response = instance.post<IApiResponse<IUser>>('/api/auth/register', request);

    return response;
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
    return instance.post<IApiResponse<void>>(
        `/api/auth/verify-otp?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(otp)}`, // Gửi qua query parameters
        {}, // Body rỗng
        { headers: { Authorization: undefined } } // Ensure no Authorization header is added
    );
};

export const callResendOtp = (email: string) => {
    return instance.post<IApiResponse<string>>(
        `/api/auth/regenerate-otp?email=${encodeURIComponent(email)}`,
        {}, // Body rỗng
        { headers: { Authorization: undefined } }
    )
}