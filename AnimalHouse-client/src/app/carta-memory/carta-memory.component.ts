import { Component, Input, OnInit, Output } from '@angular/core';
import { Carta } from './carta';

@Component({
  selector: 'app-carta-memory',
  templateUrl: './carta-memory.component.html',
  styleUrls: ['./carta-memory.component.css']
})
export class CartaMemoryComponent implements OnInit {
  @Input() carta: Carta = {
    id:"cane",
    stato: "coperta",
  };

  @Output() statoCarta:any;

  constructor() { }

  ngOnInit(): void {
  }

  cambiaStato():void {
    if(this.carta.stato==="coperta"){
      this.carta.stato = "selezionata";
    } else {
      this.carta.stato = "coperta";
    }
  }

}
