import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'; 
import { PathRest } from 'src/app/commons/static/path-api'; 
import { StoreI } from '../models/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  
  stores!: StoreI[];
 
  constructor(private httpClient: HttpClient) {}

  onSave(store: StoreI){
    return this.httpClient.post<StoreI>(PathRest.STORES,store);
  }
  onUpdate(store: StoreI){
    return this.httpClient.put<StoreI>(`${PathRest.STORES}/${store.id}`,store);
  }
  onDelete(requestId: number){
    return this.httpClient.delete(`${PathRest.STORES}/${requestId}`);  
  }
  
  getAll() { 
     return this.httpClient.get<any>(PathRest.STORES);
  }
 
}
