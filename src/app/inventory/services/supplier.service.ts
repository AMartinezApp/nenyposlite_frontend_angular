import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { SupplierI } from '../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<SupplierI[]>{
    return this.httpClient.get<SupplierI[]>(PathRest.SUPPLIERS);
  }

  onSave(supplier: SupplierI): Observable<SupplierI[]> {
    return this.httpClient.post<SupplierI[]>(PathRest.SUPPLIERS,supplier);
  }

  onUpdate(supplier: SupplierI): Observable<SupplierI[]> {
    return this.httpClient.put<SupplierI[]>(`${PathRest.SUPPLIERS}/${supplier.id}`,supplier)
  }
  
}
