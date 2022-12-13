import { Service } from './../model/service.model';
import { PatientService } from './../services/patient.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-liste-services',
  templateUrl: './liste-services.component.html',
  styleUrls: ['./liste-services.component.css']
})
export class ListeServicesComponent implements OnInit {
  services! : Service[];
  updatedService : Service={"idSer":0,"nomSer":""};
  ajout:boolean=true;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.services=this.patientService.listeServices();
  }
  ServiceUpdated(services: Service){
    this.patientService.ajouterService(services);
    console.log(Service);
  }
  update(Service: Service){
    this.updatedService=Service;
    this.ajout=false;
  }

}
