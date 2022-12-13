import { Service } from './../model/service.model';
import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.css']
})
export class UpdateServiceComponent implements OnInit {
  @Input()
  services! : Service;
  @Output() 
  ServiceUpdated= new EventEmitter<Service>();

  @Input()
  ajout! : boolean;

  

  
  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateService ",this.services);

  }

  saveService(){
    this.ServiceUpdated.emit(this.services);
    }

  
}
