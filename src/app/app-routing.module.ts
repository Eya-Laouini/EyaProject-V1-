import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients/patients.component';
import { AddPatientComponent } from './add-patient/add-patient.component'
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { PatientGuard } from './patient.guard';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';
import { SearchbyserviceComponent } from './searchbyservice/searchbyservice.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { ListeServicesComponent } from './liste-services/liste-services.component';

const routes: Routes = [
  {path: "patients", component : PatientsComponent},
  {path: "add-patient", component : AddPatientComponent, canActivate: [PatientGuard]},
  {path: "updatePatient/:id", component: UpdatePatientComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: "", redirectTo: "patients", pathMatch: "full" },
  {path: "searchbyname", component : SearchbynameComponent},
  {path: "searchbyservice", component : SearchbyserviceComponent},
  {path: "updateService/:id", component: UpdateServiceComponent,canActivate:[PatientGuard]},
  {path: "listeServices", component : ListeServicesComponent ,canActivate:[PatientGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
