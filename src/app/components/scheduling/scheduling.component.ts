import { Component } from '@angular/core';
import { Scheduling } from 'src/app/interfaces/Scheduling';
import { InfosDbService } from 'src/app/services/infos-db.service';
import { SchedulingService } from 'src/app/services/schedulingService/scheduling.service';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css'],
})
export class SchedulingComponent {
  schedulings: Scheduling[] = [];
  constructor(private schedulingService: SchedulingService) {
    this.getSchedulings();
  }

  getSchedulings(): void {
    this.schedulingService
      .getAll()
      .subscribe((schedulings) => (this.schedulings = schedulings));
  }
}
