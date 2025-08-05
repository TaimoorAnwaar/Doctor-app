import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: '1',
      email: 'patient@example.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      name: 'John Patient',
      role: 'patient',
    },
    {
      id: '2',
      email: 'doctor@example.com',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      name: 'Dr. Smith',
      role: 'doctor',
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async create(createUserDto: { email: string; password: string; name: string; role: string }): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      email: createUserDto.email,
      password: hashedPassword,
      name: createUserDto.name,
      role: createUserDto.role,
    };
    this.users.push(newUser);
    return newUser;
  }
} 