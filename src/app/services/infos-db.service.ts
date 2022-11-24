import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from '../interfaces/Clinic';
import { Scheduling } from '../interfaces/Scheduling';

@Injectable({
  providedIn: 'root',
})
export class InfosDbService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAllClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.apiURL}/clinicas`);
  }
  getAllSchedulings(): Observable<Scheduling[]> {
    return this.http.get<Scheduling[]>(`${this.apiURL}/agendamentos`);
  }
}
