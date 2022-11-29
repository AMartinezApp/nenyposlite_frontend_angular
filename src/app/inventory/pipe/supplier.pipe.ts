import { Pipe, PipeTransform } from '@angular/core';
import { SupplierI } from 'src/app/inventory/models/supplier'; 

@Pipe({
  name: 'supplierFilter',
})
export class SupplierPipe implements PipeTransform {
  transform(
    suppliers: SupplierI[],
    page: number = 0,
    search: string = ''
  ): SupplierI[] {
    if (search.length === 0) return suppliers.slice(page, page + 5);

    const resultFiltered = suppliers.filter(
      (suppliers) =>
        suppliers.name.toLowerCase().includes(search.toLowerCase()) ||
        suppliers.phone.toLowerCase().includes(search.toLowerCase()) ||
        suppliers.email.toLowerCase().includes(search.toLowerCase())
    );
    return resultFiltered.slice(page, page + 5);
  }
}
