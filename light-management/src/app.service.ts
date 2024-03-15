import { Injectable } from '@nestjs/common';
import { Light } from './app.module';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  

  calculateLights(light_brightness_list: number[], expected_brightness : number): number[][] {
    const result: number[][] = [];

    light_brightness_list.sort((a, b) => b - a);

    const findCombination = (target: number, startIndex: number, combination: number[]) => {
      if (target === 0) {
        result.push([...combination]);
        return;
      }

      for (let i = 0; i < light_brightness_list.length; i++) {
        if (target - light_brightness_list[i] >= 0) {
          combination.push(light_brightness_list[i]);
          findCombination(target - light_brightness_list[i], i, combination);
          combination.pop();
        }
      }
    };

    findCombination(expected_brightness, 0, []);

    return result;
  }

  private lights: Light[] = [
    { id: 1, roomId: 1, name: 'Light1', color: 'Red', brightness: 200, status: 'ON' },
    { id: 2, roomId: 1, name: 'Light2', color: 'Blue', brightness: 300, status: 'OFF' }
  ];

  async getRoomLights(roomId: number): Promise<Light[]> {
    const lightsInRoom = this.lights.filter(light => light.roomId === roomId);
    lightsInRoom.sort((a, b) => this.getColorIndex(a.color) - this.getColorIndex(b.color));
    console.log(lightsInRoom);
    return lightsInRoom;
  }

  private getColorIndex(color: string): number {
    const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
    return colors.indexOf(color);
  }
}
