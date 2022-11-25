import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scheduling } from 'src/app/interfaces/Scheduling';

@Injectable({
  providedIn: 'root',
})
export class SchedulingService {
  apiURL: string = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Scheduling[]> {
    return this.http.get<Scheduling[]>(`${this.apiURL}/agendamentos`);
  }
}
