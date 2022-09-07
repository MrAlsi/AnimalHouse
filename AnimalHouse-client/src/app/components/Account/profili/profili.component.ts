//component che mostra il profilo dell'utente

import { Component, OnInit } from '@angular/core';
import { ProfiloServiceService } from '../../../services/profilo-service.service';
import { HttpClient} from '@angular/common/http';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-profili',
  templateUrl: './profili.component.html',
  styleUrls: ['./profili.component.css']
})
export class ProfiliComponent implements OnInit {


  constructor(public profilo: ProfiloServiceService, public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {
    //prendo il nome dell'utente che sto guardando da params
    this.profilo.profile= this.route.snapshot.paramMap.get('username'); 
    this.profilo.profilo(); //prendo i miei dati tramite il servizio ProfiloService
  }


  //metodo che richiama il metodo di Profiloservice per eliminare l'account
  elimina(){
    this.profilo.showElimina();
  }
}
