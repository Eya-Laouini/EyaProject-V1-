import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';
import { SearchbyserviceComponent } from './searchbyservice/searchbyservice.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ListeServicesComponent } from './liste-services/liste-services.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    AddPatientComponent,
    UpdatePatientComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchbynameComponent,
    SearchbyserviceComponent,
    UpdateServiceComponent,
    ListeServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
