import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreI } from '../models/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  
  stores!: StoreI[];

  URL_API: string = environment.API_URL;

  constructor(private httpClient: HttpClient) {}

  onSave(store: StoreI){
    return this.httpClient.post<StoreI>(`${this.URL_API}/productsstores`,store);
  }
  onUpdate(store: StoreI){
    return this.httpClient.put<StoreI>(`${this.URL_API}/productsstores/${store.id}`,store);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${this.URL_API}/productsstores/${requestId}`);  
  }

  getAll() { 
     return this.httpClient.get<any>(`${this.URL_API}/productsstores`);
  }

  getStore(requestId: number): Observable<StoreI | null> {
    return this.httpClient.get<StoreI>(
      `${this.URL_API}/productsstores/${requestId}`
    );  
  }

 
 
}
