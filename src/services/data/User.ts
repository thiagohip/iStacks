import { api } from "../api";

export interface IUser{
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}

export interface ILoginRequest{
    email: string;
    password: string;
}

export interface ILoginResponse{
    access_token: string;
    user: IUser;
}

export interface IRegisterRequest{
    name: string;
    email: string;
    password: string;
}

export interface IRegisterResponse{
    email: string,
	name: string,
	updated_at: string,
	created_at: string,
	id: number,
}

export interface ILogoutResponse{
    message: string,
}

export interface IAddStackRequest{
    stack_id: number,
    user_id: number
}

export interface IAddStackResponse{
    user_stack: {
        user_id: number;
        stack_id: number;
        updated_at: string;
        created_at: string;
        id: number;
    }
}

class UserData {
    register(data: IRegisterRequest){
        return api.post<IRegisterResponse>('/user/register', data);
    }
    login(data: ILoginRequest){ 
        return api.post<ILoginResponse>('/user/login', data);
    }
    logout(){
        return api.post<ILogoutResponse>('/user/logout');
    }
    addStack(data: IAddStackRequest){
        return api.post<IAddStackResponse>('/user/addStack', data);
    }
}

const apiUser = new UserData();

export default apiUser;