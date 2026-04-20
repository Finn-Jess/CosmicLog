import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bortle',
  standalone: true
})
export class BortlePipeComponent implements PipeTransform {
  transform(value: number): string {
    const scales: { [key: number]: string } = {
      1: '✨ Pristine',
      5: '🌆 Suburban',
      9: '🏙️ City'
    };
    return scales[value] || '🌌 Unknown';
  }
}