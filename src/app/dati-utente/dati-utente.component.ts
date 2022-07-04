import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';


@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})
export class DatiUtenteComponent implements OnInit {
  
  constructor(public profilo: ProfiloServiceService) { }

  ngOnInit(): void {
  }

}
