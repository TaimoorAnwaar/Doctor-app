"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
let AppointmentsService = class AppointmentsService {
    constructor() {
        this.appointments = [];
    }
    async create(createAppointmentDto, patientId) {
        const appointment = {
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
    async findAll(userId, userRole) {
        if (userRole === 'doctor') {
            return this.appointments.filter(appointment => appointment.doctorId === userId);
        }
        else {
            return this.appointments.filter(appointment => appointment.patientId === userId);
        }
    }
    async findOne(id, userId, userRole) {
        const appointment = this.appointments.find(app => app.id === id);
        if (!appointment) {
            throw new common_1.NotFoundException('Appointment not found');
        }
        if (userRole === 'doctor' && appointment.doctorId !== userId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        if (userRole === 'patient' && appointment.patientId !== userId) {
            throw new common_1.ForbiddenException('Access denied');
        }
        return appointment;
    }
    async update(id, updateAppointmentDto, userId, userRole) {
        const appointment = await this.findOne(id, userId, userRole);
        Object.assign(appointment, updateAppointmentDto, {
            updatedAt: new Date().toISOString(),
        });
        return appointment;
    }
    async remove(id, userId, userRole) {
        const appointment = await this.findOne(id, userId, userRole);
        const index = this.appointments.findIndex(app => app.id === id);
        this.appointments.splice(index, 1);
    }
};
exports.AppointmentsService = AppointmentsService;
exports.AppointmentsService = AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
//# sourceMappingURL=appointments.service.js.map