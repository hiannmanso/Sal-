import { Component } from '@angular/core';
import { Clinic } from '../interfaces/clinic';
import { InfosDbService } from 'src/app/services/infos-db.service';
@Component({
  selector: 'app-clinics',
  templateUrl: './clinics.component.html',
  styleUrls: ['./clinics.component.css'],
})
export class ClinicsComponent {
  clinics: Clinic[] = [];
  constructor() {}
}
