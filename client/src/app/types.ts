export interface IAuth{
    email: string
    password: string
}
export interface IUserData{
    user:{
        email: string,
        _id: string
    } | null,
    accessToken: string,
    }
