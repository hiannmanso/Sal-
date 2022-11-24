import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from '../interfaces/Clinic';

@Injectable({
  providedIn: 'root',
})
export class InfosDbService {
  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll(type: string): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.apiURL}/${type}`);
  }
}
