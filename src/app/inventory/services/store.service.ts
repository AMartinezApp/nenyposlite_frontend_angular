import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { StoreI } from '../models/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<StoreI[]> {
    return this.httpClient.get<StoreI[]>(PathRest.STORES);
  }

  onSave(store: StoreI): Observable<StoreI[]> {
    return this.httpClient.post<StoreI[]>(PathRest.STORES, store);
  }
  onUpdate(store: StoreI): Observable<StoreI[]> {
    return this.httpClient.put<StoreI[]>(
      `${PathRest.STORES}/${store.id}`,
      store
    );
  }

  
}
