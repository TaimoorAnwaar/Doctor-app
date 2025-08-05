import { NextRequest } from 'next/server';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
}

// Verify token with NestJS backend
export async function verifyToken(token: string): Promise<User | null> {
  try {
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.user;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

// Get user from request cookies
export async function getCurrentUser(request: NextRequest): Promise<User | null> {
  const token = request.cookies.get('auth-token')?.value;
  
  if (!token) {
    return null;
  }

  return await verifyToken(token);
}

// Check if user is authenticated
export async function isAuthenticated(request: NextRequest): Promise<boolean> {
  const user = await getCurrentUser(request);
  return user !== null;
}

// Check if user has specific role
export async function hasRole(request: NextRequest, role: string): Promise<boolean> {
  const user = await getCurrentUser(request);
  return user?.role === role;
} 