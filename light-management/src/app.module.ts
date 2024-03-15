import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export class User {
  id: number;
  username: string;
  password: string;
}
export class Home {
  id: number;
  userId: number;
  address: string;
}
export class Room {
  id: number;
  homeId: number;
  name: string;
}
export class Light {
  id: number;
  roomId: number;
  name: string;
  color: string;
  brightness: number;
  status: string;
}
export class LightStatusHistory {
  id: number;
  lightId: number;
  status: string;
  createdAt: Date;
}

