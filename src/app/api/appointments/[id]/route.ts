import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUser, isAuthenticated } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const token = request.cookies.get('auth-token')?.value;

    // Call NestJS backend API
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/appointments/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Appointment not found' },
        { status: response.status }
      );
    }

    const appointment = await response.json();
    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Get appointment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const token = request.cookies.get('auth-token')?.value;

    // Call NestJS backend API
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/appointments/${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to update appointment' },
        { status: response.status }
      );
    }

    const appointment = await response.json();
    return NextResponse.json(appointment);
  } catch (error) {
    console.error('Update appointment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check authentication
    if (!(await isAuthenticated(request))) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const token = request.cookies.get('auth-token')?.value;

    // Call NestJS backend API
    const response = await fetch(`${process.env.NESTJS_API_URL || 'http://localhost:3001'}/appointments/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to delete appointment' },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    console.error('Delete appointment error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 