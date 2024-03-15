import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Light } from './app.module';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('calculate')
  calculateLights(@Body() data: { light_brightness_list : number[], expected_brightness : number }): number[][] {
    console.log(data.light_brightness_list );
    return this.appService.calculateLights(data.light_brightness_list , data.expected_brightness );
  }
  @Get('room/:roomId')
  async getRoomLights(@Param('roomId') roomId: number): Promise<Light[]> {
    return this.appService.getRoomLights(roomId);
  }
}


