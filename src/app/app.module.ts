import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClinicsComponent } from './components/clinics/clinics.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulingComponent } from './components/scheduling/scheduling.component';
import { FormsModule } from '@angular/forms';
import { ModalClinicComponent } from './components/modal-clinic/modal-clinic.component';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [AppComponent, ClinicsComponent, SchedulingComponent, ModalClinicComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
