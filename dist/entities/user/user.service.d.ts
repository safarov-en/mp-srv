import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/updateUser.dto';
import { RegisterUserDto } from './dto/registerUser.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    availableFields: string[];
    private filterFields;
    createUser(userData: RegisterUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserById(id: number): Promise<User>;
    getUserByLoginOrEmail(loginOrEmail: string): Promise<User>;
    updateUserData(id: number, body: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
