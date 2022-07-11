import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';
import { CURIOSITA } from './lista-curiosita';

@Component({
  selector: 'app-curiosita',
  templateUrl: './curiosita.component.html',
  styleUrls: ['./curiosita.component.css']
})
export class CuriositaComponent implements OnInit {
  //animali = CURIOSITA;
  animali: any;
  stato?: string;

  constructor(public httpClient: HttpClient, public biscotto: MangiaBiscottoService) { 
    //console.log(CURIOSITA);
    this.httpClient.get('http://localhost:3000/CRUD/curiosita').subscribe(data => { 
    console.log("Data: ", data);
      this.animali = data;}
      )
    //this.animali = CURIOSITA;
    this.stato = biscotto.getRuolo();
    console.log(this.stato);

  
  }

  ngOnInit(): void {
  }


}
