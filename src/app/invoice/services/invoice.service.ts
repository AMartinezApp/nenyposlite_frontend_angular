import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { ListInvoiceI } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListInvoiceI[]> {
    return this.httpClient.get<ListInvoiceI[]>(PathRest.INVOICES);
  }

}
