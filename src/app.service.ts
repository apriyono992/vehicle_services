import { Injectable } from '@nestjs/common';
import { CreateVehicleEvent } from './app.vehicle.event';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Vehicle } from './scheme/vehicle';

@Injectable()
export class AppService {
  constructor(@InjectModel('Vehicle') private vehicleModel: Model<Vehicle>) {}

  async HandlerCreateVehicle(createVehicle: CreateVehicleEvent) {
    const newUser = new this.vehicleModel({
      name: createVehicle.name,
      brand: createVehicle.brand,
      type: createVehicle.type,
      licensePlate: createVehicle.licensePlate,
      ownerId: createVehicle.ownerId,
    });
    const result = await newUser.save();
    return result.id;
  }
}
