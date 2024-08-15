import { api } from "../api"

export interface IStacks {
    id: number;
    name: string;
    image_path: string;
    updated_at: string;
    created_at: string;
}

export interface IStackResponse{
    stacks: IStacks[];
}

class StackData {
    user_stacks(){
        return api.get<IStackResponse>('/user/stacks');
    }

    stacks(){
        return api.get<IStackResponse>('/stacks');
    }
}

const apiStack = new StackData();

export default apiStack;