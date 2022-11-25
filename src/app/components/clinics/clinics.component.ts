import { Component } from '@angular/core';
import { Clinic } from 'src/app/interfaces/Clinic';

import { ClinicService } from 'src/app/services/clinicService/clinic.service';
@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent {
  clinics: Clinic[] = [];
  modal: boolean = false;
  showCards: boolean = false;
  showTable: boolean = true;
  isUpdate: boolean = false;
  clinicSchema = {
    id: 0,
    nome: '',
    cnpj: '',
    especialidade: '',
    telefone: '',
    cep: '',
    endereço: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    status: '',
    preço: 0,
    atendimento: {
      inicio: '',
      fim: '',
    },
  };
  clinicSearch: string = '';
  closetag: string = '/assets/close-circle-outline.svg';
  addtag: string = '/assets/add-outline.svg';
  edittag: string = '/assets/edit-outline.svg';
  searchtag: string = '/assets/search.svg';
  constructor(private clinicService: ClinicService) {
    this.getClinics();
  }
  getClinics(): void {
    this.clinicService
      .getAll()
      .subscribe((clinics) => (this.clinics = clinics));
  }
  deleteClinic(id: number): void {
    if (window.confirm('Tem certeza que gostaria de deletar essa clínica?')) {
      this.clinicService.delete(id).subscribe();
    }

    this.clinicService
      .getAll()
      .subscribe((clinics) => (this.clinics = clinics));
  }
  updateClinic(clinic: Clinic): void {
    this.modal = !this.modal;
    this.clinicSchema = clinic;
    this.isUpdate = true;
  }
  setModal(): void {
    this.clinicSchema = {
      id: 0,
      nome: '',
      cnpj: '',
      especialidade: '',
      telefone: '',
      cep: '',
      endereço: '',
      numero: '',
      bairro: '',
      cidade: '',
      estado: '',
      status: '',
      preço: 0,
      atendimento: {
        inicio: '',
        fim: '',
      },
    };
    this.isUpdate = false;
    this.modal = !this.modal;
  }
  setTable(): void {
    this.showTable = true;
    this.showCards = false;
  }
  setCards(): void {
    this.showCards = true;
    this.showTable = false;
  }
  SearchClinic(): void {
    for (const clinic of this.clinics) {
      if (clinic.nome.toUpperCase() === this.clinicSearch.toUpperCase()) {
        this.clinics = [clinic];
        console.log(clinic);
      }
    }
    if (this.clinicSearch === '') {
      this.getClinics();
    }
  }
}
