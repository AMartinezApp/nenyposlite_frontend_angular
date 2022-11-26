import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PathRest } from 'src/app/commons/static/path-api';
import { environment } from 'src/environments/environment';
 
import { TaxI } from '../models/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  tax!: TaxI[]; 

  constructor(private httpClient: HttpClient) {}

  onSave(tax: TaxI){
    return this.httpClient.post<TaxI>(PathRest.TAXES,tax);
  }
  onUpdate(tax: TaxI){
    return this.httpClient.put<TaxI>(`${PathRest.TAXES}/${tax.id}`,tax);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${PathRest.TAXES}/${requestId}`);  
  }

  getAll() { 
     return this.httpClient.get<any>(PathRest.TAXES);
  }
}
