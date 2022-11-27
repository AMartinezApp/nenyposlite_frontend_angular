import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/commons/static/path-api';
import { SettingI } from '../models/setting.models';
 

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  setting: SettingI[]=[];

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<SettingI[]> {
    return this.httpClient.get<SettingI[]>(PathRest.SETTING);
  }

  onSave(setting: SettingI){
    return this.httpClient.post<SettingI>(PathRest.SETTING,setting)
  }

  onUpdate(setting: SettingI){
    return this.httpClient.put<SettingI>(`${PathRest.SETTING}/${setting.id}`,setting);
  }

}
