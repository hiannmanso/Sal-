import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from 'src/app/interfaces/Clinic';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  apiURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.apiURL}/clinicas`);
  }
  insert(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(`${this.apiURL}/clinicas`, clinic);
  }
  delete(id: number): Observable<Clinic> {
    return this.http.delete<Clinic>(`${this.apiURL}/clinicas/${id}`);
  }
  update(clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(
      `${this.apiURL}/clinicas/${clinic.id}`,
      clinic
    );
  }
}
