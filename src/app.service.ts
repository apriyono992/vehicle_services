import { Injectable } from '@nestjs/common';
import { CreateVehicleEvent } from './app.vehicle.event';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  HandlerCreateVehicle(createVehicle: CreateVehicleEvent) {
    console.log(createVehicle);
  }
}
