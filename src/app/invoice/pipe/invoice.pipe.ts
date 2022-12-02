import { Pipe, PipeTransform } from '@angular/core';
import { ListInvoiceI } from '../models/invoice';

@Pipe({
  name: 'invoiceFilter',
})
export class InvoicePipe implements PipeTransform {
  transform(
    invoices: ListInvoiceI[],
    page: number = 0,
    search: string = ''
  ): ListInvoiceI[] {
    if (search.length === 0) return invoices.slice(page, page + 10);

    const resultFiltered = invoices.filter((invoices) =>
      invoices.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      invoices.customer.email.toLowerCase().includes(search.toLowerCase()) ||
      invoices.customer.phone.toLowerCase().includes(search.toLowerCase()) 
    );
    return resultFiltered.slice(page, page + 10);
  }
}
