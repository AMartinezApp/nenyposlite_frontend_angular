import { Pipe, PipeTransform } from '@angular/core';
import { ProductI } from 'src/app/inventory/models/product';

@Pipe({
  name: 'productFilterInvoice',
})
export class ProductInvoicePipe implements PipeTransform {
  transform(
    products: ProductI[],
    page: number = 0,
    search: string = '',
    docByPage: number = 0
  ): ProductI[] {
    if (search.length === 0) return products.slice(page, page + docByPage);
    const result = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.barcode.toLowerCase().includes(search.toLowerCase()) ||
        product.products_category.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.products_store.name.toLowerCase().includes(search.toLowerCase())
    );

    return result.slice(page, page + docByPage);
  }
}
