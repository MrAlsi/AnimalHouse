/*
  Component che mostra la lista di giochi a cui si può giocare
  inoltre carica il component del gioco deciso
*/

import { Component, OnInit } from '@angular/core';
import { GIOCHI } from './lista-giochi';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';

@Component({
  selector: 'app-giochi',
  templateUrl: './giochi.component.html',
  styleUrls: ['./giochi.component.css']
})
export class GiochiComponent implements OnInit {  
  giochi = GIOCHI;
  giochiamo?: string;
  memory?: boolean;
  quiz?: boolean;
  id?: string;

  constructor(public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
  }

  giocaA(gioco: string): void {
    this.giochiamo = gioco;
    if(this.giochiamo=="Memory"){
      this.memory= true;
      this.quiz=false;
    }else{
      if(this.giochiamo=="Quiz"){
        this.memory= false;
        this.quiz=true;
      }else{
        this.memory= false;
        this.quiz=false;
      }
    }
  }


}
