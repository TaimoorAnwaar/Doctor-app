"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            {
                id: '1',
                email: 'patient@example.com',
                password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
                name: 'John Patient',
                role: 'patient',
            },
            {
                id: '2',
                email: 'doctor@example.com',
                password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
                name: 'Dr. Smith',
                role: 'doctor',
            },
        ];
    }
    async findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
    async findById(id) {
        return this.users.find(user => user.id === id);
    }
    async create(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const newUser = {
            id: (this.users.length + 1).toString(),
            email: createUserDto.email,
            password: hashedPassword,
            name: createUserDto.name,
            role: createUserDto.role,
        };
        this.users.push(newUser);
        return newUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map