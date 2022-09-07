/*
Baby animal è lo spazio pensato per i più piccoli dove non si necessita di accedere con un account, 
però se si accede e si va su babyanimal verrano salvati punteggi dei giochi.
Questo component è il menù dove è possibile andare a vedere video buffi di animali, leggere delle curiosità e giocare a memory o fare un quiz 
*/

import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../../../services/mangia-biscotto.service';

@Component({
  selector: 'app-baby-animal',
  templateUrl: './baby-animal.component.html',
  styleUrls: ['./baby-animal.component.css']
})
export class BabyAnimalComponent implements OnInit {
  
  id?: any;
  
  constructor(public biscotto: MangiaBiscottoService) { }

  ngOnInit(): void {
    try{
      this.id=this.biscotto.getId();
    }catch (error) {
      this.id='';
    }
  }

}
