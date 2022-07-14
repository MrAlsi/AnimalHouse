import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../profilo-service.service';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-dati-utente',
  templateUrl: './dati-utente.component.html',
  styleUrls: ['./dati-utente.component.css']
})
export class DatiUtenteComponent implements OnInit {

  /*username?: any;
  nome?: any;
  ruolo?: any;
  cognome?: any;
  email?: any;
  id?: any;*/

  constructor(public profilo: ProfiloServiceService, public biscotto: MangiaBiscottoService, public http: HttpClient) { }

  ngOnInit(): void {
    //console.log("a", this.profilo.dati.username);
  }

}
