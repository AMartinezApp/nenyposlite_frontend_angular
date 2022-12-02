import { Pipe, PipeTransform } from '@angular/core';
import { InvoiceI } from 'src/app/invoice/models/invoice';

@Pipe({
  name: 'invoiceFilter'
})
export class InvoicePipe implements PipeTransform {

  transform(
    invoices: InvoiceI[],
    page: number = 0,
    search: string = ''
  ): InvoiceI[] {
    if (search.length === 0) return invoices.slice(page, page + 10);

    const resultFiltered = invoices.filter(
      (invoices) =>
      invoices.invoices_details.productdetail.toLowerCase().includes(search.toLowerCase())
    );
    return resultFiltered.slice(page, page + 10);
  }

}
