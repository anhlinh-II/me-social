export interface IApiResponse<T> {
     code: number;
     message: string;
     result?: T;
}

export interface IUser {
     id?: string;
     email: string;
     username: string;
     password?: string;
     firstName: string;
     lastName: string;
     phone: string;
     dob: string;
     gender: string;
     location: string;
     bio: string;
     role?: {
          id: string;
          name: string;
     }
     createdBy?: string;
     isDeleted?: boolean;
     deletedAt?: boolean | null;
     createdAt?: string;
     updatedAt?: string;
}

export interface IGetAccount extends Omit<IAccount, "access_token"> { }

export interface IAccount {
     access_token: string | undefined;
     user: {
          id: string;
          email: string;
          username: string;
          firstName: string;
          lastName: string;
          role: {
               id: string;
               name: string;
               permissions: {
                    id: string;
                    name: string;
                    apiPath: string;
                    method: string;
                    module: string;
               }[]
          }
     }
}
