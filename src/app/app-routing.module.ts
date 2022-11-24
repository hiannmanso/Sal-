import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClinicsComponent } from './components/clinics/clinics.component';

const routes: Routes = [{ path: '', component: ClinicsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
