import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
import { LoginUserDto } from './dto/loginUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<{
        status: string;
        data: import("./user.entity").User[];
    }>;
    getUser(id: number): Promise<{
        status: string;
        data: import("./user.entity").User;
    }>;
    login(body: LoginUserDto): Promise<{
        status: string;
        data: any;
    }>;
    register(body: LoginUserDto): Promise<{
        status: string;
        data: any;
    }>;
    updateUser(id: number, body: UpdateUserDto): Promise<{
        status: string;
        data: any;
    }>;
    deleteUser(id: number): Promise<{
        status: string;
    }>;
}
