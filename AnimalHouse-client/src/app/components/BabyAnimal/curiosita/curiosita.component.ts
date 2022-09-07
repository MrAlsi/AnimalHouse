/*
  Component che mostra le curiosità sugli animali, controlla in ruolo perché in caso 
  di 'admin' abilità il bottone aggiungi curiosità
*/

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';


@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css']
})
export class CuriositaComponent implements OnInit {
  animali?: any;
  stato?: string;
  id?: any;

  constructor(public httpClient: HttpClient, public biscotto: MangiaBiscottoService) {     
    this.httpClient.get('http://localhost:3000/curiosita').subscribe(data => { 
      this.animali = data;     
    });
  }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    try{
      this.stato = this.biscotto.getRuolo();
    }catch (error) {
      this.stato='';
    }
  }

}
