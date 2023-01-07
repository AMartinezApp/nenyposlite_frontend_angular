import { Pipe, PipeTransform } from '@angular/core';
import { CustomerI } from '../models/customer';

@Pipe({
  name: 'customerFilter',
})
export class CustomerPipe implements PipeTransform {
  transform(
    customers: CustomerI[],
    page: number = 0,
    search: string = '',
    pageNumber: number = 0
  ): CustomerI[] {
    if (search.length === 0) return customers.slice(page, page + pageNumber);

    const resultFiltered = customers.filter(
      (customers) =>
        customers.name.toLowerCase().includes(search.toLowerCase()) ||
        customers.phone.toLowerCase().includes(search.toLowerCase()) ||
        customers.email.toLowerCase().includes(search.toLowerCase())
    );
    return resultFiltered.slice(page, page + pageNumber);
  }
}
