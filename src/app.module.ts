import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VehicleScheme } from './scheme/vehicle';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    MongooseModule.forFeature([{ name: 'Vehicle', schema: VehicleScheme }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
