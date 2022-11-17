import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
 
import { TaxI } from '../models/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  tax!: TaxI[];

  URL_API: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  onSave(tax: TaxI){
    return this.httpClient.post<TaxI>(`${this.URL_API}/productstaxes`,tax);
  }
  onUpdate(tax: TaxI){
    return this.httpClient.put<TaxI>(`${this.URL_API}/productstaxes/${tax.id}`,tax);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${this.URL_API}/productstaxes/${requestId}`);  
  }

  getAll() { 
     return this.httpClient.get<any>(`${this.URL_API}/productstaxes`);
  }
}
