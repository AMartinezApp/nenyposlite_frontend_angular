import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusDoc',
})
export class StatusPipe implements PipeTransform {
  transform(status: string): string {
    if (status == 'A') {
      return 'Activo';
    }
    return 'Inactivo';
  }
}
