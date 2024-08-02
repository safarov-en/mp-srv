import { E_Gender } from './types';
export declare class User {
    id: number;
    login: string;
    email: string;
    phone: string;
    password: string;
    nameFirst: string;
    nameLast: string;
    birthDate: Date;
    gender: E_Gender | null;
}
