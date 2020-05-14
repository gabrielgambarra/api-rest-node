import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../constants';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private patientUrl = environment.apiUrl + ENDPOINTS.PATIENT;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(`${this.patientUrl}all`);
  }

  public save(patientName): Observable<any> {
    return this.http.post(`${this.patientUrl}create`, patientName);
  }
}
