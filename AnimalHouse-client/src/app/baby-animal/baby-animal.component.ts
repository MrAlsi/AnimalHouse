import { Component, OnInit } from '@angular/core';
import { MangiaBiscottoService } from '../mangia-biscotto.service';

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
