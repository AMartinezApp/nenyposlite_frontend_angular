import { Component, OnInit } from '@angular/core';
import { ListInvoiceI } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoicelist',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.scss'],
})
export class InvoicelistComponent implements OnInit {
  listInvoices: ListInvoiceI[] = [];
  
  page: number = 0;
  totalDoc: number = 0;
  search: string = '';

  constructor(private invService: InvoiceService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.invService.getAll().subscribe(
      res => {
        this.listInvoices = res
        this.totalDoc = res.length
         
      }
    )
    
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
