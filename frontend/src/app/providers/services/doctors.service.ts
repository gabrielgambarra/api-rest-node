import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  private doctorsUrl = environment.apiUrl + ENDPOINTS.DOCTOR;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.doctorsUrl}all`);
  }

  public save(doctorName): Observable<any> {
    return this.http.post(`${this.doctorsUrl}create`, doctorName);
  }
}
