import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, Request } from '@nestjs/common';
import { AppointmentsService, CreateAppointmentDto } from './appointments.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('appointments')
@UseGuards(JwtAuthGuard)
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post()
  create(@Body() createAppointmentDto: CreateAppointmentDto, @Request() req) {
    return this.appointmentsService.create(createAppointmentDto, req.user.id);
  }

  @Get()
  findAll(@Request() req) {
    return this.appointmentsService.findAll(req.user.id, req.user.role);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.appointmentsService.findOne(id, req.user.id, req.user.role);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppointmentDto: Partial<CreateAppointmentDto>, @Request() req) {
    return this.appointmentsService.update(id, updateAppointmentDto, req.user.id, req.user.role);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.appointmentsService.remove(id, req.user.id, req.user.role);
  }
} 