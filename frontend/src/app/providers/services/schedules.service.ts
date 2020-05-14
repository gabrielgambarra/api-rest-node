import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  private schedulesUrl = environment.apiUrl + ENDPOINTS.SCHEDULE;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.schedulesUrl}all`);
  }

  public save(scheduling): Observable<any> {
    return this.http.post(`${this.schedulesUrl}create`, scheduling);
  }
}
