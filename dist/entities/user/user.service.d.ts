import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    availableFields: string[];
    private filterFields;
    createUser(userData: any): Promise<User[]>;
    getAllUsers(): Promise<User[]>;
    getUserData(id: number): Promise<User>;
    updateUserData(id: number, body: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
