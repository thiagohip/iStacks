import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";
import apiUser, { IAddStackRequest, IAddStackResponse, ILoginRequest, ILoginResponse, IRegisterRequest, IRegisterResponse } from '../data/User';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../api";
import apiStack, { IStackResponse } from "../data/Stack";

interface AuthContextData {
    authData?: ILoginResponse;
    signIn: ({email, password}: ILoginRequest) => Promise<ILoginResponse>;
    signUp: ({name, email, password}: IRegisterRequest) => Promise<IRegisterResponse>;
    signOut: () => Promise<void>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    userStacks?: IStackResponse;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface IAuthProvider{
    children: ReactNode;
}

export const AuthProvider: React.FC<IAuthProvider> = ({children}) => {
    const [authData, setAuth] = useState<ILoginResponse>();
    const [userStacks, setUserStacks] = useState<IStackResponse>();
    const [loading, setLoading] = useState(true);

    async function loadFromStorage(){
        const response = await AsyncStorage.getItem("@AuthData");
        if(response){
            const auth_data = JSON.parse(response) as ILoginResponse;
            setAuth(auth_data);
            api.defaults.headers.common.Authorization = `Bearer ${auth_data.access_token ? auth_data.access_token : ""}`
            const user_stacks = await apiStack.user_stacks();
            setUserStacks(user_stacks.data)
        }
        setLoading(false);
    }

    useEffect(()=>{
        loadFromStorage();
    }, [])

    async function signIn({email, password}: ILoginRequest): Promise<ILoginResponse> {
        const response = await apiUser.login({email, password});
        if('access_token' in response.data){
            setAuth(response.data);
            AsyncStorage.setItem("@AuthData",JSON.stringify(response));
            api.defaults.headers.common.Authorization = `Bearer ${response.data.access_token ? response.data.access_token : ""}`

            const user_stacks = await apiStack.user_stacks();
            setUserStacks(user_stacks.data)
        }else{
            console.log("Usuario invalido");
        }
        return response.data; 
    }

    async function signUp({name, email, password}: IRegisterRequest): Promise<IRegisterResponse>{
        const response = await apiUser.register({name, email, password});
        return response.data;
    }

    async function signOut(): Promise<void>{
        setAuth(undefined);
        AsyncStorage.removeItem("@AuthData");
        return;
    }



    return(
        <AuthContext.Provider value={{authData, signIn, signUp, signOut, loading, setLoading, userStacks}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}