import { Pipe, PipeTransform } from '@angular/core';
import { ProductI } from '../models/product';

@Pipe({
  name: 'productFilter',
})
export class ProductPipe implements PipeTransform {
  transform(
    products: ProductI[],
    page: number = 0,
    search: string = ''
  ): ProductI[] {
    if (search.length === 0) return products.slice(page, page + 10);

    const resultFiltered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.barcode.toLowerCase().includes(search.toLowerCase()) ||
        product.products_category.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.products_store.name.toLowerCase().includes(search.toLowerCase())
    );
    return resultFiltered.slice(page, page + 10);
  }
}
