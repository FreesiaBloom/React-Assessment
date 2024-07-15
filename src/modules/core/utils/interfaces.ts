
export interface UserState { 
    data: {
        userData: User[];
    }
}

export interface State { 
    userData: User[];
    dataError: boolean;
}

export interface ErrorState { 
    data: {
        dataError: boolean;
    }
}

export interface Crumb {
    label: string;
    to: string;
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}