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
  id?: any;

  constructor(public httpClient: HttpClient, public biscotto: MangiaBiscottoService) { 
    //console.log(CURIOSITA);
    
    this.httpClient.get('http://localhost:3000/CRUD/curiosita').subscribe(data => { 
    console.log("Data: ", data);
      this.animali = data;
      return;
    });
  }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
    //this.animali = CURIOSITA;
    try{
      this.stato = this.biscotto.getRuolo();
    }catch (error) {
      this.stato='';
    }
  }
}
