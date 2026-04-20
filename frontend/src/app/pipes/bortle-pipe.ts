import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bortle',
  standalone: true
})
export class BortlePipe implements PipeTransform {
  transform(value: number): string {
    const descriptions: { [key: number]: string } = {
      1: '✨ Pristine Dark Sky',
      3: '🏡 Rural/Suburban Transition',
      5: '🌆 Suburban Sky',
      7: '🏙️ Suburban/Urban Transition',
      9: '🏮 Inner-City Sky'
    };
    return descriptions[value] || '🌌 Average Sky';
  }
}