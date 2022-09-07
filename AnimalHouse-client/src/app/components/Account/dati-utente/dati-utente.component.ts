//component che utilizza il servizio ProfiloService per prendere i dato dell'utente 
//e permette di visualizzare i dati dell'utente che si sta guardando

import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../../../profilo-service.service';
import { MangiaBiscottoService } from '../../../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})
export class DatiUtenteComponent implements OnInit {

  constructor(public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public http: HttpClient) { }

  ngOnInit(): void {
  }

}
