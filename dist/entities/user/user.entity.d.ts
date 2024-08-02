import { E_Gender } from './types';
export declare class User {
    id: number;
    email: string;
    password: string;
    nameFirst: string;
    nameLast: string;
    birthDate: Date;
    gender: E_Gender | null;
}
