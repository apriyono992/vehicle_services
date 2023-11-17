import * as mongoose from 'mongoose';

export const VehicleScheme = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  type: { type: String, required: true },
  licensePlate: { type: String, required: true },
  ownerId: { type: Number, required: true },
});

export interface Vehicle extends mongoose.Document {
  id: string;
  name: string;
  brand: string;
  type: string;
  licensePlate: string;
  ownerId: number;
}
