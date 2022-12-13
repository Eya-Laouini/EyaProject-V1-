import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Patient } from '../model/patient.model';
import { Service } from '../model/service.model';

@Component({
  selector: 'app-searchbyservice',
  templateUrl: './searchbyservice.component.html',
  styleUrls: ['./searchbyservice.component.css']
})
export class SearchbyserviceComponent implements OnInit {
  patients!: Patient[];
  services! : Service[];
  IdService!:number;

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.services=this.patientService.listeServices();
    this.patients=[];
  }

onChange(){
  console.log(this.IdService);
  this.patients=this.patientService.Searchbyservice(this.IdService);
}
/* supprimerProduit( prod: Produit){
  
  const index = this.produits.indexOf(prod, 0);
  if (index > -1) {
  this.produits.splice(index, 1);
  } 
} */
supprimerPatient(p:Patient)
{
  let conf=confirm('Are you sure?');
  if(conf)
  {
    this.patientService.supprimerPatient(p);
    this.patients=this.patientService.Searchbyservice(this.IdService);
  }
}
}