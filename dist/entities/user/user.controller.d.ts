import { Response, Request } from 'express';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/updateUser.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(res: Response, account: string): Promise<{
        status: string;
        data: import("./user.entity").User[];
    }>;
    getUser(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
    createUser(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
    updateUser(id: number, body: UpdateUserDto, res: Response): Promise<Response<any, Record<string, any>>>;
    deleteUser(id: number, res: Response): Promise<Response<any, Record<string, any>>>;
}
