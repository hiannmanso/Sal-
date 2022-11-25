import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clinic } from 'src/app/interfaces/Clinic';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  apiURL = 'http://localhost:3000';
  data = {
    nome: 'hiann',
    cnpj: '14945970',
    especialidade: 'Fisioterapia',
    telefone: '42 1587-4396',
    cep: '14945970',
    endereço: 'Rua Ademar de Barros',
    numero: 394,
    bairro: 'Cambaratiba',
    cidade: 'Cambaratiba',
    estado: 'sp',
    status: 'ativo',
    preço: 147.85,
    atendimento: {
      inicio: '08:00',
      fim: '17:00',
    },
  };
  constructor(private http: HttpClient) {}

  getAll(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.apiURL}/clinicas`);
  }
  insert(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(`${this.apiURL}/clinicas`, clinic);
  }
  delete(id: number) {
    return this.http.delete<Clinic>(`${this.apiURL}/clinicas/${id}`);
  }
  update(clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(
      `${this.apiURL}/clinicas/${clinic.id}`,
      clinic
    );
  }
}
