import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: {
        email: string;
        password: string;
        name: string;
        role: string;
    }): Promise<{
        id: string;
        email: string;
        name: string;
        role: string;
    }>;
    getProfile(req: any): any;
}
