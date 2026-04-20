import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bortle',
  standalone: true
})
export class BortlePipe implements PipeTransform {
  transform(value: number): string {
    const scales: { [key: number]: string } = {
      1: '✨ Pristine Dark Sky',
      3: '🏡 Rural Sky',
      5: '🌆 Suburban Sky',
      7: '🏙️ Bright Suburban',
      9: '🏮 Inner-City Sky'
    };
    return scales[value] || '🌌 Average Sky';
  }
}