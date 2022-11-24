import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { SchedulingComponent } from './components/scheduling/scheduling.component';

const routes: Routes = [
  { path: 'clinics', component: ClinicsComponent },
  { path: 'schedulings', component: SchedulingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
