import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';

export interface Appointment {
  id: string;
  doctorId: string;
  patientId: string;
  date: string;
  time: string;
  reason?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  updatedAt: string;
}

export interface CreateAppointmentDto {
  doctorId: string;
  date: string;
  time: string;
  reason?: string;
}

@Injectable()
export class AppointmentsService {
  private appointments: Appointment[] = [];

  async create(createAppointmentDto: CreateAppointmentDto, patientId: string): Promise<Appointment> {
    const appointment: Appointment = {
      id: (this.appointments.length + 1).toString(),
      doctorId: createAppointmentDto.doctorId,
      patientId,
      date: createAppointmentDto.date,
      time: createAppointmentDto.time,
      reason: createAppointmentDto.reason,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    this.appointments.push(appointment);
    return appointment;
  }

  async findAll(userId: string, userRole: string): Promise<Appointment[]> {
    if (userRole === 'doctor') {
      return this.appointments.filter(appointment => appointment.doctorId === userId);
    } else {
      return this.appointments.filter(appointment => appointment.patientId === userId);
    }
  }

  async findOne(id: string, userId: string, userRole: string): Promise<Appointment> {
    const appointment = this.appointments.find(app => app.id === id);
    
    if (!appointment) {
      throw new NotFoundException('Appointment not found');
    }

    if (userRole === 'doctor' && appointment.doctorId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    if (userRole === 'patient' && appointment.patientId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    return appointment;
  }

  async update(id: string, updateAppointmentDto: Partial<CreateAppointmentDto>, userId: string, userRole: string): Promise<Appointment> {
    const appointment = await this.findOne(id, userId, userRole);
    
    Object.assign(appointment, updateAppointmentDto, {
      updatedAt: new Date().toISOString(),
    });
    
    return appointment;
  }

  async remove(id: string, userId: string, userRole: string): Promise<void> {
    const appointment = await this.findOne(id, userId, userRole);
    const index = this.appointments.findIndex(app => app.id === id);
    this.appointments.splice(index, 1);
  }
} 