import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { NcftypeI } from '../models/ncftype';

@Injectable({
  providedIn: 'root'
})
export class NcftypeService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<NcftypeI[]>{
    return this.httpClient.get<NcftypeI[]>(PathRest.NCFTYPES);
  }

  onSave(ncftype: NcftypeI): Observable<NcftypeI[]>{
    return this.httpClient.post<NcftypeI[]>(PathRest.NCFTYPES,ncftype);
  }

  onUpdate(ncftype: NcftypeI): Observable<NcftypeI[]>{
    return this.httpClient.put<NcftypeI[]>(`${PathRest.NCFTYPES}/${ncftype.id}`,ncftype);
  }

}
