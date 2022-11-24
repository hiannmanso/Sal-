import { Component } from '@angular/core';
import { Clinic } from 'src/app/interfaces/Clinic';

import { InfosDbService } from 'src/app/services/infos-db.service';

@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent {
  clinics: Clinic[] = [];
  constructor(private infosDbService: InfosDbService) {
    this.getClinics();
  }
  getClinics(): void {
    this.infosDbService
      .getAllClinics()
      .subscribe((clinics) => (this.clinics = clinics));
  }
}
