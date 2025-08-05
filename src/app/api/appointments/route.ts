import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, isAuthenticated } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await getCurrentUser(request);
    const token = request.cookies.get('auth-token')?.value;

    // Call NestJS backend API
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/appointments`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to fetch appointments' },
        { status: response.status }
      );
    }

    const appointments = await response.json();
    return NextResponse.json(appointments);
  } catch (error) {
    console.error('Get appointments error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { doctorId, date, time, reason } = body;
    const token = request.cookies.get('auth-token')?.value;

    // Validate input
    if (!doctorId || !date || !time) {
      return NextResponse.json(
        { error: 'Doctor ID, date, and time are required' },
        { status: 400 }
      );
    }

    // Call NestJS backend API
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ doctorId, date, time, reason }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to create appointment' },
        { status: response.status }
      );
    }

    const appointment = await response.json();
    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    console.error('Create appointment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 