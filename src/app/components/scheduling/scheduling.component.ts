import { Component } from '@angular/core';
import { Scheduling } from 'src/app/interfaces/Scheduling';
import { InfosDbService } from 'src/app/services/infos-db.service';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent {
  schedulings: Scheduling[] = [];
  constructor(private infosDbService: InfosDbService) {
    this.getSchedulings();
  }

  getSchedulings(): void {
    this.infosDbService
      .getAllSchedulings()
      .subscribe((schedulings) => (this.schedulings = schedulings));
  }
}
