import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { CustomerI } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CustomerI[]>{
    return this.httpClient.get<CustomerI[]>(PathRest.CUSTOMERS);
  }

  onSave(customer: CustomerI): Observable<CustomerI[]>{
    return this.httpClient.post<CustomerI[]>(PathRest.CUSTOMERS, customer);
  }
  
  onUpdate(customer: CustomerI): Observable<CustomerI[]>{
    return this.httpClient.put<CustomerI[]>(`${PathRest.CUSTOMERS}/${customer.id}`, customer);
  }

}
