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
  modal = false;
  closetag = '/assets/close-circle-outline.svg';
  addtag = '/assets/add-outline.svg';
  edittag = '/assets/edit-outline.svg';
  searchtag = '/assets/search.svg';
  constructor(private clinicService: ClinicService) {
    this.getClinics();
  }
  getClinics(): void {
    this.clinicService
      .getAll()
      .subscribe((clinics) => (this.clinics = clinics));
  }
  deleteClinic(id: number): void {
    this.clinicService.delete(id).subscribe();
    this.getClinics();
  }
  updateClinic(clinic: Clinic): void {
    this.clinicService.update(clinic).subscribe();
    this.getClinics();
  }
  setModal() {
    this.modal = !this.modal;
  }
}
