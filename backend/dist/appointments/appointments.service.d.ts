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
export declare class AppointmentsService {
    private appointments;
    create(createAppointmentDto: CreateAppointmentDto, patientId: string): Promise<Appointment>;
    findAll(userId: string, userRole: string): Promise<Appointment[]>;
    findOne(id: string, userId: string, userRole: string): Promise<Appointment>;
    update(id: string, updateAppointmentDto: Partial<CreateAppointmentDto>, userId: string, userRole: string): Promise<Appointment>;
    remove(id: string, userId: string, userRole: string): Promise<void>;
}
