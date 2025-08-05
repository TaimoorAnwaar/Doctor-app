export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    role: string;
}
export declare class UsersService {
    private readonly users;
    findByEmail(email: string): Promise<User | undefined>;
    findById(id: string): Promise<User | undefined>;
    create(createUserDto: {
        email: string;
        password: string;
        name: string;
        role: string;
    }): Promise<User>;
}
