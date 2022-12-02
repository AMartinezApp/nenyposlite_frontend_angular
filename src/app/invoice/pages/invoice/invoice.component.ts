import { Component, OnInit } from '@angular/core';
import { ProductI } from 'src/app/inventory/models/product';
import { ProductService } from 'src/app/inventory/services/product.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
})
export class InvoiceComponent implements OnInit {
  products: ProductI[] = [];
  page: number = 0;
  totalDoc: number = 0;
  search: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  getAll() {
    this.productService.getAll().subscribe((res) => {
      this.products = res;
    });
  }

  nextPage() {
    this.page +=10;
  }

  prevPage() {
    if (this.page > 0)
        this.page -=10;
  }

  onSearch(search: string){
    this.page = 0;
    this.search = search;
  }

}
