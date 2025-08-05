import { AppointmentsService, CreateAppointmentDto } from './appointments.service';
export declare class AppointmentsController {
    private readonly appointmentsService;
    constructor(appointmentsService: AppointmentsService);
    create(createAppointmentDto: CreateAppointmentDto, req: any): Promise<import("./appointments.service").Appointment>;
    findAll(req: any): Promise<import("./appointments.service").Appointment[]>;
    findOne(id: string, req: any): Promise<import("./appointments.service").Appointment>;
    update(id: string, updateAppointmentDto: Partial<CreateAppointmentDto>, req: any): Promise<import("./appointments.service").Appointment>;
    remove(id: string, req: any): Promise<void>;
}
