import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'custom',
    standalone: false
})
export class CustomPipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (!value) return '';
    return value.toUpperCase();
  }
}