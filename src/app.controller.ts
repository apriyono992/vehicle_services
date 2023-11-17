import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_vehicle')
  handlerCreateVehicle(data: any) {
    return this.appService.HandlerCreateVehicle(data);
  }
}
