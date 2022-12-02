import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invcondition'
})
export class InvconditionPipe implements PipeTransform {

  transform(condition: string,): string {
   if(condition === 'cash'){
    return 'Contado';
   };
   return 'Crédito';
  }

}
