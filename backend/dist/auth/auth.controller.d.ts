import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any, loginDto: LoginDto): Promise<{
        user: {
            id: any;
            email: any;
            name: any;
            role: any;
        };
        accessToken: string;
    }>;
    verifyToken(req: any): Promise<{
        user: any;
    }>;
    getProfile(req: any): any;
}
